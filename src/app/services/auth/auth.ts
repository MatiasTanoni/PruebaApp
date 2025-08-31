import { Injectable, inject, signal } from '@angular/core';
import { Databases } from '../databases/databases';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { SupabaseClient, User } from '@supabase/supabase-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private supabase: SupabaseClient;
  user = signal<User | boolean>(false);
  router = inject(Router);

  constructor(private db: Databases) {
    this.supabase = this.db.client
  }

  async login(email: string, password: string): Promise<{ success: boolean; message: string }> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
      return { success: false, message: 'Credenciales inválidas.' };
    }

    this.router.navigate(['/home'], { replaceUrl: true });
    return { success: true, message: 'Inicio de sesión exitoso.' };
  }

  async logout(): Promise<{ success: boolean; message: string }> {
    try {
      const { error } = await this.supabase.auth.signOut();

      if (error) {
        return { success: false, message: error.message };
      }

      this.router.navigate(['/auth'], { replaceUrl: true });

      return { success: true, message: 'Sesión cerrada correctamente.' };
    } catch (error) {
      return { success: false, message: 'Error al cerrar la sesión.' };
    }
  }

}
