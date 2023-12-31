# Configuracion Inicial de proyecto desde 0

```
npm init -y
```

## Node con Typescript - TS-Node-dev simplificado

### 1.- Instalar Typescript y demas dependencias

```
npm i -D typescript @types/node ts-node-dev rimraf
```

### 2.- Inicializar el archivo de configuracion de Typescript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

### 3.- Crear scripts para dev, build y start

```json
"dev": "tsnd --respawn src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```
