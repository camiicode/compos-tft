# 🧩 Compos TFT - Armador de composiciones para Teamfight Tactics

Una aplicación web minimalista desarrollada en **Astro + React** para crear, visualizar y compartir composiciones de campeones y objetos en **Teamfight Tactics (TFT)**.

Ideal para jugadores que quieren planear sus partidas o compartir sus builds favoritas con facilidad.

![compos-tft-preview](./public/preview.png) <!-- Opcional si quieres poner una imagen del proyecto -->

---

## 🚀 Características

- 🎮 Arrastra y organiza campeones en una composición.
- 🧠 Selecciona objetos, niveles y habilidades de forma visual.
- 🔄 Información obtenida directamente desde la API oficial de Riot y Data Dragon.
- 🌐 Aplicación ligera y responsiva hecha con Astro.

---

# 💡 Futuras mejoras (To-Do)

- Soporte para guardar composiciones localmente
- Filtros por sinergias, costos, clases
- UI/UX refinada para mobile
 
---

## ⚙️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/camiicode/compos-tft.git
   cd compos-tft
   ```

2. Instala la Dependencias   

  ```bash
  npm i
  cd compos-tft
  ```
3. Crea un archivo `.env` en la raiz del proyecto y coloca tu clave API de RIOT

  ```bash
  RIOT_API_KEY=tu_clave_aquí
  ```

4. Inicia el servidor de desarrollo:

  ```bash
  npm run dev
  ```
---

5. Puedes ver un ejemplo en el archivo `/.env.example`

# 🛡️ Seguridad

Tu archivo `.env` está excluido del repositorio (.gitignore). Nunca subas tu clave API. Asegúrate de tener cuidado al hacer commits si modificas este archivo.

# 🧠 CREDITOS

- Datos e imágenes gracias a Riot Games y Data Dragon

# 📜 Licencia

MIT License © 2025 - Camiicode

