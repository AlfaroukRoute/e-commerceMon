import { RenderMode, ServerRoute } from '@angular/ssr';

//! 
// !! page ==> client sr , server sr , static site generation (((())))
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server,
  }
];
