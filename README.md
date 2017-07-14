# Platzom

Platzom es un idioma inventado para el creador de memes moderno. (Curso de Fundamentos de JavaScript de Platzi)

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esas dos letras.
- Si la palabra inicia con Z, se le agrega "pe" al final.
- Si la palabra tiene 10 o más letras, se debe partir a la mitad y unir con un guión.
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.

## Instalación

```
npm install platzom
``

## Uso

```
import platzom from 'platzom'

platzom("Programar") //Program
```

## Créditos
- [Sacha Lifzyc](https://twitter.com/slifzyc)