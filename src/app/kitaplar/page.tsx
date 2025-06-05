"use client";

import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  FileText,
  ArrowRight,
  Download,
  ExternalLink,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function Kitaplar() {
  const kitaplar = [
    {
      id: "manevi-bakim",
      title: "Manevi Bakım Hizmetleri",
      icon: <Heart className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2020",
      pages: "194",
      summary:
        "Batı'da Resmi Kurumlarda Profesyonel Manevi Bakım Hizmetleri: Teori ve Pratiği",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Bu kitap, manevi bakım hizmetlerinin teorik çerçevesi ve pratik
            uygulamaları hakkında kapsamlı bir rehber niteliğindedir. Dr. Arslan
            Karagül'ün 30 yılı aşkın Hollanda tecrübesini ve Amsterdam
            VU-Üniversitesi İlahiyat Fakültesi'ndeki akademik çalışmalarını
            yansıtmaktadır.
          </p>
          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
            "Bakmıyor hiç kimse dünyadan öte
            <br />
            Dalmış âlem şimdi cismaniyete
            <br />
            Kalmamış kurtulmaya iman, ümit
            <br />
            Ağla fânus ağla insaniyete"
            <br />
            <span className="not-italic block mt-1 text-right">
              - Arif Nihat Asya
            </span>
          </blockquote>
          <p className="text-muted-foreground">
            Kitap, Batı'daki profesyonel manevi bakım (manevi rehberlik,
            danışmanlık, destek ve yardım) hizmetlerinin ne olduğunu ve nasıl
            uygulandığını ortaya koyarken, Türkiye'deki uygulamalarla
            karşılaştırarak hastane, cezaevleri ve askeriye gibi resmi
            kurumlarda profesyonel manevi bakım uzmanlarının yetişmesine katkı
            sağlamayı amaçlamaktadır.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">İçindekiler:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Bölüm 1: Batı'da Manevi Bakım Hizmetleri
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Manevi bakımın tanımı ve kapsamı</li>
                  <li>Temel kavramlar: Manâ, manevi ve maneviyat</li>
                  <li>Batı'da manevi bakımın tarihi gelişimi</li>
                  <li>Modern psikoloji bilimi ve manevi bakım ilişkisi</li>
                  <li>Manevi bakımda modeller ve metotlar</li>
                </ul>
              </li>
              <li>
                Bölüm 2: Batı'da İslami-Manevi Bakım
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Manevi bakımda İslami kimlik</li>
                  <li>İslami manevi bakımın tanımı ve içeriği</li>
                  <li>İslami gelenekte yeri ve önemi</li>
                  <li>Manevi Bakım Görevlisinin fonksiyonları</li>
                  <li>İslami ilişkiler modeli</li>
                </ul>
              </li>
              <li>
                Bölüm 3: Türkiye'de Manevi Bakım Hizmetleri
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Dünü: Başlangıç ve geçiş devresi</li>
                  <li>Bugünü: Gelişim devresi</li>
                  <li>Geleceği: Olgunlaşma devresi</li>
                  <li>Organizasyon ve eksiklikler</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Yazar Hakkında:</strong> Dr. Arslan Karagül, Amsterdam
              VU-Üniversitesi İlahiyat Fakültesi, İslam İlahiyat Merkezi emekli
              öğretim üyesidir. İslam din eğitimi ve manevi bakım hizmetleri
              uzmanı, manevi rehberlik, danışmanlık, destek ve yardım eğitmeni,
              süpervizör olarak görev yapmıştır. Bu kitap, yazarın otuz yılı
              aşkın süren Hollanda'daki manevi bakım deneyimlerini ve akademik
              çalışmalarını yansıtmaktadır.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Yayın Tarihi:</strong> 30 Ağustos 2020, Ünye
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "yeniden-musluman",
      title: "Yeniden Müslüman Olmak",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2020",
      pages: "151",
      summary:
        "Modern dünyada İslami kimliği yeniden keşfetme ve gerçek Müslümanlığı yaşama rehberi",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            "Yeniden Müslüman Olmak", Dr. Arslan Karagül'ün kırk yıllık Avrupa
            tecrübesini yansıtan, günümüz Müslümanlarının İslam'ı doğru anlama
            ve yaşama konusundaki sorunlarını ele alan bir eserdir. Kitap,
            İslam'ın sadece inanç değil aynı zamanda doğru düşünce ve
            davranışları da gerektiren bir din olduğunu vurgulamaktadır.
          </p>
          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
            "Yeniden Müslüman olmak eskilerin iman yenilemek (tecdidi iman)
            dedikleri şeye benzemektedir. Ancak burada kastedilen iman
            yenilemekten de öte yanlış düşünce, anlayış ve davranışlarımızı da
            değiştirerek İslam'ı olması gerektiği gibi yaşamaktır."
            <span className="not-italic block mt-1 text-right">
              - Dr. Arslan Karagül
            </span>
          </blockquote>
          <p className="text-muted-foreground">
            Yazar, günümüz Müslüman toplumlarında görülen yanlış uygulamaları ve
            davranışları eleştirerek, Kur'an'ın gerçek anlamıyla anlaşılması ve
            yaşanması gerektiğini savunmaktadır. Kitap, özellikle Batı ve
            Müslüman toplumlar arasındaki kültürel farklılıklara ve
            Müslümanların günlük hayattaki tutarsızlıklarına dikkat çekmektedir.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">İçindekiler:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Ön Söz: Neden Yeniden Müslüman Olmak?</li>
              <li>'Kâlû-Belâ' ve anlamı</li>
              <li>Kader, ecel ve rızık meseleleri</li>
              <li>Kur'an'la yeniden Müslüman olmak</li>
              <li>Kur'an ve ibadet terapi</li>
              <li>İbadetlerle yeniden Müslüman olmak</li>
              <li>Namaz terapi ve uygulaması</li>
              <li>Gerçek ve sahte Müslümanlık</li>
              <li>Manevi reçete ve telkin</li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Okuyucu Tavsiyesi:</strong> "Çok güzel bir eser olmuş.
              Umarım bu kitabı okuyanların İslam'ı daha doğru anlamalarına ve
              bunun şuuruna vararak İslam'ı İslam gibi yaşamalarına vesile
              olur." (V. Yücesan)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Yayın Tarihi:</strong> 14 Kasım 2020, Ünye
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "siirlerle-hatiralar",
      title: "Şiirlerle Hatıralar",
      icon: <FileText className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2022",
      pages: "174",
      summary:
        "Hayat tecrübelerinin şiirsel anlatımı ve duygu dünyasının yansımaları",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            "Şiirlerle Hatıralar", Dr. Arslan Karagül'ün yaşam tecrübelerini
            şiirsel bir dille anlattığı edebi bir eserdir. Kitap, yazarın farklı
            dönemlerde kaleme aldığı şiirleri dört ana bölümde toplamaktadır:
            Genel Konular, Korona Şiirleri, Şahıslar ve Siyasi/Özel Konular.
          </p>
          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
            "Sözün özü
            <br />
            Söz vardır tatlıdır söz vardır acı
            <br />
            Söz vardır dostunu yapar davacı
            <br />
            Acı sözün bir özürdür ilacı
            <br />
            Zehir'i bal eden tatlı söz gerek"
            <span className="not-italic block mt-1 text-right">
              - Dr. Arslan Karagül
            </span>
          </blockquote>
          <p className="text-muted-foreground">
            Kitapta yer alan şiirler, yazarın hem Türkiye'deki hem de
            Hollanda'daki yaşamından izler taşımaktadır. Vatan sevgisi, gurbet
            duygusu, aile bağları, dini değerler, toplumsal olaylar ve yaşlanma
            gibi temalar şiirlerde işlenmektedir. Özellikle korona döneminde
            yazılan şiirler, bu zorlu süreçteki duygu ve düşünceleri
            yansıtmaktadır.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">İçindekiler:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>
                Genel Konular
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Sözün özü, Uyarı, Firavun, Kime kızalım</li>
                  <li>Varlık-yokluk, Din kardeşi, İsyan, Sabır</li>
                  <li>Maskeler, Ensar, Manevi şifa, Nasihat</li>
                  <li>Bayrak şiiri, İnsanlık, Ayrılık, Yazık</li>
                  <li>Geri sayım, Bayramlık, Su su su, Sağlıklı Yaşlanmak</li>
                  <li>İç huzur, İnsan, Köye gidin, Kriz vurdu vurdu bizi</li>
                </ul>
              </li>
              <li>
                Korona Şiirleri
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Korona hikayemiz, Korona 1: Köyüm</li>
                  <li>Korona 2: Karantina, Korona 3: Ders</li>
                  <li>Korona 4: Bu korona nerden çıktı?</li>
                  <li>Korona 5-14: Karantina deneyimleri</li>
                </ul>
              </li>
              <li>
                Şahıslar
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Babacığım, Eşime, Müteveffa kız kardeşime</li>
                  <li>Anam'ın Son Beşiğine, Yeğenim Zeyneb'e</li>
                  <li>Nagiş yeğenime, Alev Alatlı'ya</li>
                  <li>Mirzabeyoğlu'na, Leyla Kızım'a</li>
                </ul>
              </li>
              <li>
                Dörtlükler ve Özel Konular
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Hayat, Gitme zamanı, Kadir gecesi, Sanat</li>
                  <li>50. Yaş Şiiri, 60 yaş, 66 yaş: Dua 1</li>
                  <li>70 yaş şiiri: VEDA</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Kitap Hakkında:</strong> Şiirlerle Hatıralar, Dr. Arslan
              Karagül'ün 50 yılı aşkın bir sürede yazdığı şiirlerin bir araya
              getirilmesiyle oluşmuştur. Yazar, 66 yaşında kaleme aldığı "Dua 1"
              şiirinde bu durumu şöyle ifade eder: "Sanmayın ki bunları / Yazdım
              bir gün gecede / 50 yılda her gece / Bir ilhamla geldiler."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mistik-yollar",
      title: "Mistik Yollar",
      icon: <Award className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2021",
      pages: "131",
      summary:
        "Doğu ve Batı'daki mistik gelenekler ve manevi yolculuklar üzerine kapsamlı bir inceleme",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            "Mistik Yollar", farklı kültür ve geleneklerdeki mistik yaklaşımları
            ve manevi arayış yollarını inceleyen karşılaştırmalı bir çalışmadır.
            Kitap, mistisizm kavramının etimolojisinden başlayarak, Doğu ve
            Batı'daki mistik gelenekleri, kutsal mekanları ve derin felsefi
            soruları ele almaktadır.
          </p>
          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">
            "Hayat baştan sona bir öğrenme ve gelişim yolculuğudur. Maneviyat bu
            yolculuğun olmazsa olmazıdır. Mistik yollar gizemli yollar demektir.
            Mistik kavramı, empirik (bilimsel) olmayan ancak bilişsel ve
            sezgisel süreçler yoluyla kutsalın deneyimlenmesi anlamına
            gelmektedir."
            <span className="not-italic block mt-1 text-right">
              - Dr. Arslan Karagül
            </span>
          </blockquote>
          <p className="text-muted-foreground">
            Dr. Arslan Karagül, bu eserinde İslam tasavvufu ile diğer mistik
            gelenekler arasındaki benzerlik ve farklılıkları inceleyerek, İbni
            Arabi, İmam Gazali, Hallac-ı Mansur gibi önemli İslam düşünürlerinin
            görüşlerini modern bir bakış açısıyla değerlendirmektedir.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">İçindekiler:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>ÖNSÖZ: HAYAT VE MANEVİYAT</li>
              <li>
                I. Bölüm: KAVRAMLAR
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Mistisizm ve temel kavramlar</li>
                  <li>Maneviyat ve mistik deneyim</li>
                </ul>
              </li>
              <li>
                II. BÖLÜM: DOĞU VE BATI'DA MİSTİK YOLLAR
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Doğu ve Batı'da Mistik Yollar haritası</li>
                  <li>Re-inkarnasyon kavramı</li>
                  <li>Buda ve aydınlanma yolları</li>
                  <li>Dharma çarkı ve 8 kollu teker</li>
                  <li>Karma ve Darma kavramları</li>
                  <li>Budizm ve Hinduizm karşılaştırması</li>
                </ul>
              </li>
              <li>
                III. DÖRT DİNDE KUTSAL SAYILAN MEKANLAR
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Hinduizm'in kutsal mekanları</li>
                  <li>Musevilik'te kutsal mekanlar</li>
                  <li>Hristiyanlık'ta kutsal mekanlar</li>
                  <li>İslam'da kutsal mekanlar</li>
                </ul>
              </li>
              <li>
                IV. BÖLÜM: ARKA PLAN, BENZERLİKLER, FARKLILIKLAR VE DERİN
                SORULAR
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Mistik kelimesinin etimolojisi</li>
                  <li>
                    Batı mistik düşüncesi ve İslam tasavvufu karşılaştırması
                  </li>
                  <li>İbni Arabi'nin fikirleri ve konumu</li>
                  <li>İmam Gazali ve İbni Arabi arasındaki farklar</li>
                  <li>Tecelli fikri ve sudur nazariyesi</li>
                  <li>İbni Rüşd ve İmam Gazali</li>
                  <li>Din ve Sufizm ilişkisi</li>
                  <li>Mevlana, Vahdet-i Vucud ve Hallac-ı Mansur</li>
                  <li>Nakşibendi ve Kadiri tarikatları</li>
                  <li>Alevilik ve Bektaşilik</li>
                  <li>Dört gelenekte benlik, hiçlik ve Tanrı anlayışı</li>
                  <li>Fenâ-Bekâ kavramları</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Kitap Hakkında:</strong> Dr. Arslan Karagül'ün bu eseri,
              farklı mistik gelenekleri karşılaştırmalı olarak inceleyerek,
              manevi arayış içindeki modern insana rehberlik etmeyi
              amaçlamaktadır. Kitap, dört ana bölümde mistisizmin kavramsal
              çerçevesini, Doğu ve Batı'daki mistik yolları, kutsal mekanları ve
              derin felsefi soruları ele almaktadır.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-gradient-to-r from-primary/20 to-blue-500/20 px-5 py-2 rounded-full">
            <p className="text-sm font-medium text-primary">
              Dr. Arslan Karagül
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">Kitaplar</span> ve Yayınlar
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Manevi bakım, eğitim ve kişisel gelişim alanlarında akademik ve
            kültürel eserler
          </p>
        </div>
      </FadeIn>

      {/* Kitaplar Bölümü */}
      <FadeIn delay={300}>
        <div className="mb-16">
          <Tabs defaultValue="manevi-bakim" className="w-full">
            <div className="overflow-x-auto pb-2 -mx-4 px-4 mb-2">
              <TabsList className="flex md:grid md:grid-cols-4 min-w-max md:min-w-0 mb-4">
                {kitaplar.map((kitap) => (
                  <TabsTrigger
                    key={kitap.id}
                    value={kitap.id}
                    className="text-xs sm:text-sm whitespace-nowrap flex items-center gap-1 px-2 py-1.5"
                  >
                    {kitap.icon}
                    <span className="hidden sm:inline">
                      {kitap.title.length > 25
                        ? kitap.title.substring(0, 22) + "..."
                        : kitap.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {kitaplar.map((kitap) => (
              <TabsContent key={kitap.id} value={kitap.id}>
                <FadeIn>
                  <Card>
                    <CardHeader className="px-4 sm:px-6">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl flex flex-wrap items-center gap-2 mt-6">
                        {kitap.icon}
                        <span className="leading-tight">{kitap.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 flex flex-col items-center">
                          <div className="relative h-80 w-60 rounded-md overflow-hidden shadow-xl mb-4 bg-muted/50 flex items-center justify-center">
                            <BookOpen className="h-20 w-20 text-primary/30" />
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 text-muted-foreground mr-1" />
                              <span className="text-sm text-muted-foreground">
                                {kitap.pages} sayfa
                              </span>
                            </div>
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-muted-foreground mr-1" />
                              <span className="text-sm text-muted-foreground">
                                {kitap.year}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="mt-4 w-full group"
                          >
                            <Link
                              href="#"
                              className="flex items-center justify-center"
                            >
                              İletişime Geç
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-xl font-semibold mb-2 text-primary">
                            {kitap.summary}
                          </h3>
                          {kitap.content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </FadeIn>

      {/* İletişim Bölümü */}
      <FadeIn delay={400}>
        <BackgroundGradient className="bg-primary/5" containerClassName="mb-16">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-center mt-6">
                Kitaplar Hakkında Bilgi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-pretty">
              <p className="mb-4 text-center">
                Dr. Arslan Karagül'ün kitapları hakkında daha detaylı bilgi
                almak, temin etmek veya akademik amaçlarla kullanmak için
                doğrudan kendisiyle iletişime geçebilirsiniz.
              </p>
              <p className="font-medium text-center mt-6">
                <Button>
                  <Link
                    href="mailto:arslankaragul@hotmail.com"
                    className="flex items-center gap-2"
                  >
                    İletişim: arslankaragul@hotmail.com
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </p>
            </CardContent>
          </Card>
        </BackgroundGradient>
      </FadeIn>

      {/* Güncelleme Bilgisi */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Son Güncelleme: 25.03.2025</p>
      </div>
    </div>
  );
}
