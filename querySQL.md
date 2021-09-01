# SQL requests

## toutes les promos, dans l'ordre alphabétique

```SQL
SELECT *
  FROM promo
  ORDER BY name ASC;
```

## tous les étudiants, dans l'ordre alphabétique des noms de famille

```SQL
SELECT *
  FROM student
  ORDER BY last_name ASC;
```

## tous les étudiants de la promo 216

```SQL
SELECT *
  FROM student
  WHERE promo_id = '216';
```

## les étudiants dont le nom ou le prénom commence par "T"

```SQL
SELECT * FROM student WHERE first_name LIKE 'T%';
```
