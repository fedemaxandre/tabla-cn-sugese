# Tabla CN SUGESE — Instrucciones de Deploy

## Qué es esto
Servidor web con la Tabla Interactiva de Cumplimiento Normativo.
Cuando alguien presiona "Guardar", los datos se guardan en el servidor.
Cuando alguien abre la URL, carga los últimos datos guardados.

---

## PASO 1 — Subir a GitHub (5 minutos)

1. Entrá a https://github.com y creá una cuenta (si no tenés)
2. Clic en el botón verde **"New"** para crear repositorio
3. Nombre: `tabla-cn-sugese`
4. Seleccioná **"Private"** (privado)
5. Clic **"Create repository"**
6. En la página siguiente, clic **"uploading an existing file"**
7. **Arrastrá todos estos archivos** a la ventana:
   - `server.js`
   - `package.json`
   - La carpeta `public/` con el `index.html` adentro
8. Clic **"Commit changes"**

---

## PASO 2 — Deploy en Render (5 minutos, gratis)

1. Entrá a https://render.com
2. Clic **"Get Started for Free"**
3. Registrate con tu cuenta de Google (mismo botón "Sign in with Google")
4. Una vez adentro, clic **"New +"** → **"Web Service"**
5. Clic **"Connect account"** en GitHub → autorizá Render
6. Buscá `tabla-cn-sugese` → clic **"Connect"**
7. Completá el formulario así:
   - **Name:** tabla-cn-sugese
   - **Region:** Oregon (US West)
   - **Branch:** main
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
8. Clic **"Create Web Service"**
9. Esperás 2-3 minutos mientras se despliega
10. Render te da una URL así: `https://tabla-cn-sugese.onrender.com`

---

## PASO 3 — Compartir

Esa URL es tu aplicación. Cualquier persona que la abre puede:
- Ver los 145 requerimientos
- Editar Estado, Observaciones, Fecha Límite
- Presionar Guardar y los cambios quedan guardados para todos

Compartís el link por email o WhatsApp. Listo.

---

## Nota sobre el plan gratuito de Render

El plan gratis "duerme" el servidor después de 15 minutos sin uso.
La primera vez que alguien lo abre tras inactividad tarda ~30 segundos.
Después de eso, funciona normal.

Si querés que sea siempre instantáneo, el plan de $7/mes lo mantiene activo 24/7.
