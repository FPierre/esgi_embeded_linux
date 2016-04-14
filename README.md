# Linux embarqué - semaine thématique - Avril 2016

> Groupe : Thierry Allard saint albin, Nicolas Journaud, Pierre Flauder

Regroupements des TPs, cours et du projet de fin de semaine

## TPs

### TP3

* Création de la VM Linux (basée sur l'image Linux-EM-V3.vdi). Ubuntu Server x64
* Récupération du code du Kernel v3.10
* Configurations de la compilation du Kernel (ajout/suppression de modules dans le Kernel)

### TP4

#### Rappel des commandes à exécuter

```bash
$ dd if=/dev/zero of=./filesystem_sd bs=1M count=1023
```

```bash
$ du -sh filesystem_sd
```

```bash
$ fdisk -u filesystem_sd
```

```bash
$ P
```

```bash
$ n
```

```bash
$ p
```

```bash
$ t
```

```bash
$ b
```

```bash
$ n
```

```bash
$ p
```

```bash
$ w
```

```bash
$ sudo losetup --offset 1048576 /dev/loop1 filesystem_sd
```

```bash
$ sudo mkfs.vfat /dev/loop1
```

```bash
$ sudo losetup --offset $((512*206848)) /dev/loop2 filesystem_sd
```

```bash
sudo mkfs.ext4 /dev/loop2
```

```bash
$ sudo losetup -d /dev/loop2
```

```bash
$ sudo losetup -d /dev/loop1
```

```bash
$ mkdir -p montage/dos
```

```bash
$ sudo mount -o loop,offset=$((512*2048)) ./filesystem_sd ./montage/dos/
```

```bash
$ mkdir -p montage/linux
```

```bash
$ sudo mount -o loop,offset=$((512*206848)) ./filesystem_sd ./montage/linux/
```

```bash
$ cd montage/linux/
```

```bash
$ sudo mkdir bin dev etc home lib mnt proc root sbin sys tmp usr var
```

```bash
$ sudo mkdir dev/pts etc/init.d usr/bin usr/sbin
```

```bash
$ sudo make ARCH=arm INSTALL_MOD_PATH=../../image-sd/montage/linux/ modules_install
```

## Projet

### Requis

* Connexion Internet
* Connexion au Raspberry Pi (SSH ?)
