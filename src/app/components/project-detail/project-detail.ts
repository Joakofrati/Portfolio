import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  isLightboxOpen = false;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Escuchar cambios en la URL por si navegas de un proyecto a otro
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.project = PROJECTS.find(p => p.id === id);
        // Scroll al top al cambiar de página
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0); 
        }
      }
    });
  }

  // ABRIR: Recibe el índice de la foto clickeada
  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.isLightboxOpen = true;
    // Bloquear scroll del body cuando se abre
    document.body.style.overflow = 'hidden';
  }

  // CERRAR
  closeLightbox() {
    this.isLightboxOpen = false;
    // Desbloquear scroll
    document.body.style.overflow = 'auto';
  }

  // SIGUIENTE IMAGEN
  nextImage() {
    if (!this.project?.gallery) return;
    // Si es la última, vuelve a la 0 (carrusel infinito)
    if (this.currentImageIndex === this.project.gallery.length - 1) {
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex++;
    }
  }

  // IMAGEN ANTERIOR
  prevImage() {
    if (!this.project?.gallery) return;
    // Si es la primera, va a la última
    if (this.currentImageIndex === 0) {
      this.currentImageIndex = this.project.gallery.length - 1;
    } else {
      this.currentImageIndex--;
    }
  }

  // (Opcional) CONTROL POR TECLADO
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;
    
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }
  
}