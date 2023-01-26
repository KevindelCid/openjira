para iniciar el proyecto necesitas utilizar el siguiente comando:
```
npm i
```
luego debes configurar tu archivo .env en la raiz del proyecto con la siguiente ruta para mongo

```
MONGO_URL=mongodb://localhost:27017/entriesDB
```

luego debes utilizar el siguiente comando de docker para construir y ejecutar la imagen que te permitira usar mongodb (solo si no tienes instalado mongo)

```
docker-compose up -d
```

luego puedes arrancar el programa utilizando el siguiente comando

```
npm run dev
```


