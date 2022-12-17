# Selamat datang para pengurus MOSANSA
repository ini adalah bentuk raw dari data yang ada di https://sman1cikampek.sch.id/event

## Cara menambahkan event baru

pertama pergi ke events/mainMenu.json lalu **tambahkan**(Event terbaru letaknya harus di paling bawah) kode yang seperti
```json
{
    "nama":"Nama Acara",
    "deskripsi":"Deskripsi acara",
    "id":"idPageAcara",
    "img":"BannerAcara.png"
}
```
Contoh
```json
{
    "nama":"Classmeet 2022",
    "deskripsi":"Classmeet 2022 adalah acara dimana akan ada lomba antarkelas",
    "id":"classmeet2022",
    "img":"event/classmeet2022.png"
}
```
**path img dimulai dari root folder events**
perlu sadari bahwa `id` itu adalah hal yang akan kita pakai menjadi identitas acara, jadi harus sama penulisannya


### Lalu tambahkan acara dalam list di events/list.json
tambahkan event page ke list.json agar dapat dilihat melalui website
```json
{
    "id":"idPageAcara",
    "nama":"Nama Acara",
    "file":"event/Acara.md"
}
```
contoh
```json
{
    "id":"classmeet2022",
    "nama":"Classmeet 2022",
    "file":"event/classmeet2022.md"
}
```
perlu di sadari bahwa path file juga dimulai dari root folder events dan file adalah bentuk file yang nantinya akan di tampilkan di website showEvents

### Membuat Page
Tentu saja kita akan membuat page yang akan di tampilkan di websitenya, namun di sini ada beberapa yang harus di pastikan bahwa `id` di json yang ditambahkan semua tadi sama

langsung saja lanjut ke pembuatan pagenya

sekarang kita buat file baru di `events/event/` yang namanya sudah di tentukan di list.json tadi, contoh `classmeet2022.md`

Mulai menulis file dengan detail mengenai acaranya, format bisa memakai html(yang di support md) atau md pure(murni md)
```md
# contoh
## Contoh
```

# Selesai


## Tambahan
event/extendEvent adalah sub page yang bisa di tambahkan jika ada detail yang tidak terlalu di perlukan di page utama event

contoh classmeet2022 yang memiliki beberapa acara terpisah seperti esport

Jika butuh, maka kamu juga dapat membuatnya dengan cara yang mirip, bedanya ini hanya langsung di tambahkan ke `list.json` dan tidak `mainmenu.json` dan path akan menjadi `extendEvent` bukan ``event`