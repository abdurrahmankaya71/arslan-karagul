"use client";

import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  School,
  BookOpen,
  Users,
  Award,
  CalendarClock,
  FileText,
  Video,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import YouTubePlayer from "@/components/YouTubePlayer";

export default function PAKOzelEgitim() {
  const sertifikalar = [
    {
      id: "genel-mesleki-sup",
      title: "GENEL MESLEKİ SÜPERVİZYON EĞİTİMİ SERTİFİKASI",
      icon: <School className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">İçerik ve Amaç</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Teorik bilgi ve pratik uygulamalar</li>
                <li>Öğrenmeyi öğrenme ve mesleki (profesyonel) gelişim</li>
                <li>İş tecrübesi üzerine integratif ve reflektif öğrenme</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Çalışma Şekli</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Kredi: 6 EC/AKTS</li>
                <li>İki haftada bir, 3-4 saatlik, 12 birliktelik</li>
                <li>Bir gruptaki katılımcı sayısı en fazla 4 kişi</li>
                <li>Toplam katılım: 4-12 kişi</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Giriş Şartları</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Bir Yüksek Okul veya Fakülte mezunu olmak</li>
              <li>
                Halen (manevi danışmanlık, öğretmenlik, doktorluk, hemşirelik,
                ebelik, sosyal veya psikolojik danışmanlık, öğretim üyeliği
                gibi) insana hizmete yönelik profesyonel bir mesleği, haftada en
                az 8 saatten 2 yıldır yürütüyor olmak
              </li>
              <li>50 yaş üstü olmamak</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Zorunlu Literatür</h4>
            <p className="text-muted-foreground">
              Karagül, Arslan (2025), SÜPERVİZYON VE İNTERVİZYON. İnsana hizmete
              odaklı profesyonellikte yeni bir öğrenme ve gelişim metodu
              (I.Bölüm).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "genel-mesleki-supvizor",
      title: "GENEL MESLEKİ SÜPERVİZÖRLÜK EĞİTİMİ SERTİFİKASI",
      icon: <Users className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">İçerik</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  İlk ders tanışma ve giriş (teorik bilgi), son ders
                  değerlendirme
                </li>
                <li>On sefer bireysel, on sefer grup süpervizyonu verme</li>
                <li>Toplam 12 süpervizörlük eğitimi derslerine katılım</li>
                <li>Altı bireysel süpervizyon üzerine süpervizyon (BÜS)</li>
                <li>Altı grup süpervizyonu üzerine süpervizyon (GÜS)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Çalışma Şekli</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Kredi: 6 EC/AKTS</li>
                <li>İki haftada bir 4-5 saatlik toplam 12 birliktelik</li>
                <li>Katılım: 4-12 kişi</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Giriş Şartları</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Bir Yüksek Okul veya Fakülte mezunu olmak</li>
              <li>
                Halen insana hizmete yönelik bir mesleği, haftada en az 8
                saatten 4 yıldır yürütüyor olmak
              </li>
              <li>50 yaş üstü olmamak</li>
              <li>Genel süpervizyon sertifikasına sahip olmak</li>
              <li>
                Anadili Türkçe olanların, İngilizce veya Hollandaca (Flemenkçe)
                bilmesi
              </li>
              <li>
                Anadili Hollandaca olanların Türkçe veya İngilizce bilmeleri
                şarttır
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mdr-baslangic",
      title:
        "MDR MESLEKİ FORMASYON ve SÜPERVİZYON BAŞLANGIÇ EĞİTİMİ SERTİFİKASI",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">İçerik ve Amaç</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Teorik bilgi, pratik beceri ve süpervizyona giriş</li>
                <li>Mesleki bilgi, beceri ve süpervizyon tecrübesi edinmek</li>
                <li>
                  Sahayla ilgili zorunlu literatürden yazılı ve sözlü sınavlar
                </li>
                <li>İletişim ve profesyonel konuşma teknikleri</li>
                <li>Yaparak (tecrübeden) öğrenmeye dayalı uygulamalar</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Çalışma Şekli</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Kredi: 12 EC/AKTS</li>
                <li>Haftada 3-5 saatlik 12 beraberlik</li>
                <li>
                  Altısı pratik beceriler, altısı süpervizyona giriş
                  uygulamaları
                </li>
                <li>Süpervizyon çalışmaları en fazla 4 kişilik gruplarda</li>
                <li>Katılım: 8-12 kişi</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Giriş Şartları</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                İslami ilimler veya İlahiyat Fakültesi çıkışlı olup MDR Yüksek
                Lisans öğrencisi veya mezunu olmak
              </li>
              <li>50 yaş üstü olmamak</li>
              <li>
                Bir yerde MDR olarak haftada en az bir gün (8 saat) çalışıyor
                veya staj yapıyor olmak
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mdr-ihtisas",
      title: "MDR MESLEKİ FORMASYON İHTİSAS EĞİTİMİ ve SÜPERVİZYON SERTİFİKASI",
      icon: <Award className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">İçerik ve Amaç</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Özel manevi hayat hikayesi analizi, serbest konuşma</li>
                <li>
                  Vaaz-hutbe analizleri, ikili konuşma (verbatim) analizleri
                </li>
                <li>Bibliodrama ve benzeri uygulamalar</li>
                <li>Kendini daha iyi tanıma ve mesleki kaliteyi geliştirme</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Çalışma Şekli</h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Kredi: 6 EC/AKTS</li>
                <li>
                  12 hafta (6+3+3), haftada üç gün 5-6 saatlik birliktelik
                </li>
                <li>Bir gün (8 saat) klinik uygulama</li>
                <li>Katılım: 8-12 kişi</li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Giriş Şartları</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                İslami ilimler veya İlahiyat Fakültesi çıkışlı olup MDR Yüksek
                Lisans mezunu olmak
              </li>
              <li>50 yaş üstü olmamak</li>
              <li>
                Haftada en az 8 saatten 2 yıllık mesleki uygulama tecrübesi
                olmak
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mdr-supvizor",
      title: "MDR MESLEKİ SÜPERVİZÖRLÜK EĞİTİMİ SERTİFİKASI",
      icon: <Award className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Çalışma Şekli</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>İki haftada bir, dörder saatlik 8 beraberlik</li>
              <li>Kredi: 6 EC/AKTS</li>
              <li>Katılım: 8-12 kişi</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Giriş Şartları</h4>
            <p className="text-muted-foreground">
              II. ve IV. sertifikaya sahip olmak
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-primary">Zorunlu Literatür</h4>
            <p className="text-muted-foreground">
              Leach, Jane and Michael Paterson. Pastoral supervision. A
              handbook. second edition.2015, London.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "intervizyon-koordinator",
      title: "MESLEKİ İNTERVİZYON KOORDİNATÖRLÜĞÜ SERTİFİKASI",
      icon: <Users className="h-6 w-6 text-primary" />,
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Bu sertifika için öncelikle genel süpervizyon ve süpervizörlük
            eğitimi sertifikası almak şarttır. Saha tecrübesi (staj) bundan
            sonra istenir.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/30"
          >
            Post-Akademik Eğitim Merkezi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            PAK <span className="text-primary">Özel Eğitim Merkezi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Post-Akademik mesleki süpervizyon/intervizyon ve süpervizörlük
          </p>
        </div>
      </FadeIn>

      {/* Tanıtım Bölümü */}
      <FadeIn delay={200}>
        <BackgroundGradient className="bg-primary/5" containerClassName="mb-16">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Tanıtım</CardTitle>
            </CardHeader>
            <CardContent className="text-pretty">
              <p className="mb-4">
                Merkezimizce şahıs ve kurumlara genel süpervizyon ve intervizyon
                sunumları yapılır. Şartlarına uygun olanlara genel ve özel
                mesleki süpervizyon/intervizyon ve süpervizörlük konusunda
                eğitim sertifikaları verilir.
              </p>
              <p className="mb-4">
                Genel mesleki sertifika için insana hizmete yönelik her hangi
                bir meslekte çalışıyor olmak gerekir. Özel mesleki sertifika
                özel bir meslek dalı olan Manevi Bakım Hizmetleri (MBH): Manevi
                danışmanlık, destek ve rehberlik (MDR) dalında çalışan veya bu
                dalda staj yapanlara verilir.
              </p>
              <p className="font-medium">
                <strong>Önemli not:</strong> Bu sertifikaların hiçbiri resmi bir
                yetki belgesi değildir. Mesleki tutum ve davranışlarla ilgili
                kalite gelişim belgesidir. İş garantisi vermez, ancak yapılan
                işte kendini daha iyi tanıma ve geliştirebilme fırsatı sunar.
              </p>
            </CardContent>
          </Card>
        </BackgroundGradient>
      </FadeIn>

      {/* Amaç ve Kapsam */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <FadeIn direction="left" delay={300}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Amaç ve Kapsam
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-pretty">
              <p>
                PAK Özel Eğitim Merkezi insana hizmete odaklı profesyonellikte
                genel ve özel eğitimsel süpervizyon/intervizyon ve süpervizörlük
                sertifikaları vermek üzere kurulmuştur.
              </p>
              <p>
                Merkezimizde hem yüz yüze hem de uzaktan görünümlü eğitim
                imkânları sunulmaktadır.
              </p>
              <p>
                Merkezimiz özellikle Resmî Kurumlarda Profesyonel Manevi Bakım
                Hizmetleri (MBH): Manevi Danışmanlık, Destek, Rehberlik ve
                Yardım (MDR) alanında Mesleki Formasyon ve Süpervizyon Eğitimi
                vermeyi amaçlamaktadır.
              </p>
              <p>
                Burada mesleki formasyon mesleki bilgi ve becerileri,
                süpervizyon ve intervizyon ise meslekle ilgili reflektif öğrenme
                ve gelişimi içermektedir. Nihai amaç hem profesyonel meslek
                erbabı hem de süpervizör yetiştirmektir.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn direction="right" delay={400}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarClock className="h-5 w-5 text-primary" />
                Eğitim Şekli
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-pretty">
              <p>
                Buradaki her türlü eğitimin imkanlar ölçüsünde yüz yüze
                yapılması tercihimizdir. Ancak zamanımızda teknolojik imkân ve
                şartlar dahilinde bu tür eğitimlerin de internet üzerinden
                uzaktan (Zoom, Teams, W.app gibi ağlarla) görüntülü verilmesi de
                mümkündür.
              </p>
              <p>
                Ancak, bu durumda yine de en az %20'lik bir kısmın, başlangıç ve
                sonuçta birkaç günlük de olsa, yüz yüze yapılması bizim
                tercihimiz olacaktır. Bunun yeri ve zamanı katılımcılarla
                yapılacak görüşmelerde belirlenecektir.
              </p>
              <p>
                Eğitime uzaktan internet üzerinden görüntülü katılacakların ders
                esnasında yanlarında başka hiç kimsenin (çocuklar dahil)
                olmaması ve tek başına sessiz bir mekanda oturabilmeleri kesin
                koşuldur.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      {/* Video Bölümü */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 rounded-3xl" />

        <FadeIn>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-gradient">Tanıtım Videosu</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              PAK Özel Eğitim Merkezi ve sunduğumuz hizmetler hakkında daha
              fazla bilgi edinmek için tanıtım videomuzu izleyebilirsiniz.
            </p>

            <div className="max-w-4xl mx-auto">
              <FadeIn delay={200}>
                <div className="rounded-xl overflow-hidden shadow-2xl relative ring-1 ring-black/10 dark:ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 pointer-events-none z-10 opacity-30" />
                  <YouTubePlayer
                    videoId="I80a6V0nyNw"
                    title="Dr. Arslan Karagül - PAK Özel Eğitim Merkezi Tanıtımı"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Sertifikalar Bölümü */}
      <FadeIn delay={500}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Sertifika <span className="text-primary">Programları</span>
          </h2>

          <Tabs defaultValue="genel-mesleki-sup" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {sertifikalar.map((sertifika) => (
                <TabsTrigger
                  key={sertifika.id}
                  value={sertifika.id}
                  className="text-xs md:text-sm flex items-center gap-1.5"
                >
                  {sertifika.icon}
                  <span className="hidden md:inline">Sertifika</span>{" "}
                  {sertifika.id.split("-").pop()}
                </TabsTrigger>
              ))}
            </TabsList>

            {sertifikalar.map((sertifika) => (
              <TabsContent key={sertifika.id} value={sertifika.id}>
                <FadeIn>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                        {sertifika.icon}
                        {sertifika.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{sertifika.content}</CardContent>
                  </Card>
                </FadeIn>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </FadeIn>

      {/* Genel Şartlar */}
      <FadeIn delay={600}>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Genel Bitiriş Şartları
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Literatür ve Katılım</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>
                    İlgili sertifikalara ait zorunlu literatürleri okuyup
                    özetlemek ve önemli bulunan noktaları sözlü olarak da ifade
                    edebilmek.
                  </li>
                  <li>
                    Pratik uygulamalardaki birlikteliklere yüzde yüz katılmak
                    şarttır. Oturumlara %80'den az katılanlara sertifika
                    verilmez, % 80 katılanlara ek ödevler verilir. Ek ödevler
                    yapılıp teslim edilmedikçe sertifika verilmez.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Ödevler ve Teslim Süresi</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>
                    Uygulamalar esnasında verilecek ödevleri eksiksiz (yazılı
                    olarak) sunmuş ve bunu sözlü olarak da ifade edebilmiş
                    olmak.
                  </li>
                  <li>
                    Son verilen ödevleri kurs bitiminden itibaren altı ay içinde
                    teslim etmeyenler sertifika hakkını kaybederler.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Ücret ve Ödeme</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Kurs ücretleri üç taksitte ödenebilir. Son taksitin kursun
                  bitiminden önce ödenmesi şarttır. Ders ücretleri sertifika
                  çeşitlerine göre daha sonra belirlenecektir.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </FadeIn>

      {/* İletişim Bölümü */}
      <FadeIn delay={700}>
        <div className="bg-muted/30 rounded-xl p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">İletişim</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Sertifika programları ve eğitimler hakkında daha fazla bilgi almak
              için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="mb-6">
              <p className="font-medium">Doçent Dr. Arslan KARAGÜL</p>
              <p className="text-muted-foreground">
                Amsterdam VU-Üniversitesi Emekli Öğretim Üyesi (2005-2015)
                <br />
                İslam Din Eğitimi ve Manevi Bakım Hizmetleri Uzmanı
                <br />
                Manevi danışmanlık destek ve rehberlik eğitmeni, süpervizör
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="group">
                <Link
                  href="mailto:arslankaragul@hotmail.com"
                  className="flex items-center gap-2"
                >
                  E-posta: arslankaragul@hotmail.com
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Güncelleme Bilgisi */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Son Güncelleme: 25.03.2025</p>
      </div>
    </div>
  );
}
