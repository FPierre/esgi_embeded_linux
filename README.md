# Linux embarqué - semaine thématique - Avril 2016

> Groupe : Thierry Allard saint albin, Nicolas Journaud, Pierre Flauder

Regroupements des TPs, cours et du projet de fin de semaine

## Notions

* Sur ARM, c'est le GPU qui boot la carte (pas le CPU, pour des raisons de lecture du code sur la carte).
* Il est possible de booter une carte sur mémoire Flash plutôt qu'avec le GPU (la Flash est mappée sur la mémoire de la carte, l'accès se fait de façon transparente). Exemple de la Beaglebone.
* /sbin/init est un programme C compilé avec GCC (utilise libc). Il est utilisé pour booter la carte (le noyau lui done la main). C'est le processus parent de **tous** les les autres processus.

## TPs

* Rappel language C
* FIFO en C

## Projet

### Requis

* Connexion Internet
* Connexion au Raspberry Pi (SSH ?)
