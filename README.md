# Git

## Initialiser un depot git

```
git init
```

---

## Enregistrer ses changements

> /!\ Attention il faut se trouver dans le dossier du projet dans le terminal

pour mettre ses changements en attente de sauvegarde

```
git add .
```

pour sauvegarder les changements (créer un commit) avec un message

```
git commit -m "mon message de commit qui explique ce que je viens de modifier"
```

pour pousser sur le depot(repository) distant (sur github) si on a cloner un projet

```
git push
```

si le repo a été init directement en local

```
git push -u <nom> <branch>
// exemple
git push -u origin main
```

l'option "u" est un raccourci pour "set-upstream" qui permet de syncroniser le depot distant et le depot local

---

## Ecraser le commit précédent

pour sauvegarder les changements en écrasant le commit précédent avec un message

```
git commit --amend -m "mon message de commit qui explique ce que je viens de modifier"
```

> le commit précédent sera remplacé par celui ci

## Cloner un repo

```
git clone <addresse du repo à cloner>
```

> utiliser de préférence l'addresse SSH

---

## Basculer sur un commit précédent

```
git checkout <id du commit>
```

pour revenir à l'état initial

```
git switch -
```

---

## Reinitialiser (écraser) sur HEAD en supprimant les changements

```
git reset --hard HEAD
```

pour reinitialiser sur un commit précédent

```
git reset --hard <id du commit>
```

---

## Ajouter un repo distant (dans le cas d'un git init)

```
git remote add <nom> <addresse du repo git>
```

> par convention le nom sera "origin"

---

## Supprimer un repo distant

```
git remote remove <addresse du repo git a supprimer>
```

---

## Lister les repos distant

```
git remote -v
```

---

## Lister l'historique des commits

```
git log
```

## Lister les branches

```
git branch
```

---

## Créer une branche

```
git branch <nom de la branche>
```

---

## Basculer sur une branche

```
git checkout <nom de la branche>
```

---

## Supprimer une branche

```
git branch -d <nom de la branche>
```

---

## Créer une branche et basculer directement dessus

```
git checkout -b <nom de la branche>
```

> pour créer la branche git se base sur la branch actuelle

---

## Créer une branche à partir d'une autre et basculer dessus

```
git checkout -b <nom de la branche> <nom de la branche de base>
```

---

## Fusionner des branches

```
git merge <nom de branch a fusionner>
```

git fusionnera la branch passée dans la commande avec la branche actuelle
