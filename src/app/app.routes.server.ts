import { RenderMode, ServerRoute } from '@angular/ssr';


// !! page ==> csr , ssr , static site generation (((())))
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
