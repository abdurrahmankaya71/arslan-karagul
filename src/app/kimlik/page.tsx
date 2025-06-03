"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  Award,
  GraduationCap,
  FileText,
  MapPin,
  Globe,
  Calendar,
  ExternalLink,
  Mail,
} from "lucide-react";

export default function Kimlik() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-primary/30"
          >
            Özgeçmiş
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Doç. Dr. <span className="text-primary">Arslan Karagül</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            İslami Manevi Bakım ve Din Eğitimi Uzmanı, Süpervizör
          </p>
        </div>
      </FadeIn>

      {/* Profil Bölümü */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
        <div className="md:col-span-4 lg:col-span-3">
          <FadeIn direction="left">
            <BackgroundGradient
              className="bg-primary/20"
              containerClassName="mb-6"
            >
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Dr. Arslan Karagül"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                  priority
                />
              </div>
            </BackgroundGradient>

            <Card>
              <CardHeader>
                <CardTitle>Kişisel Bilgiler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Ünvan</p>
                    <p className="text-muted-foreground">
                      Doç. Dr. (Ass. Prof.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Meslek</p>
                    <p className="text-muted-foreground">İlahiyatçı</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Doğum Tarihi</p>
                    <p className="text-muted-foreground">01.06.1952</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Doğum Yeri</p>
                    <p className="text-muted-foreground">Ünye, Ordu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Vatandaşlık</p>
                    <p className="text-muted-foreground">
                      Türkiye ve Hollanda (Çifte Vatandaş)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">İkamet</p>
                    <p className="text-muted-foreground">
                      Ünye (1983-2016 arası Amsterdam/Hollanda)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">İletişim</p>
                    <a
                      href="mailto:arslankaragul@hotmail.com"
                      className="text-primary hover:underline"
                    >
                      arslankaragul@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Web</p>
                    <a
                      href="http://www.arslankaragul.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      arslankaragul.com <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <div className="md:col-span-8 lg:col-span-9">
          <FadeIn direction="right">
            <Tabs defaultValue="ozgecmis" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="ozgecmis">Kısa Özgeçmiş</TabsTrigger>
                <TabsTrigger value="egitim">Eğitim ve Kariyer</TabsTrigger>
                <TabsTrigger value="yayinlar">Akademik Çalışmalar</TabsTrigger>
              </TabsList>

              <TabsContent value="ozgecmis" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Kısa Özgeçmiş
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-pretty">
                    <p>
                      1952'de Ordu'nun Ünye kazasının Tekkiraz nahiyesinin
                      Uğurlu köyünde doğdu. İlkokulu köyünde, orta-liseyi Samsun
                      İmam Hatip'te okudu. 1980'de Samsun Yüksek İslam
                      Enstitüsü'nü bitirerek aynı yıl Amasya-Taşova'ya müftü
                      olarak atandı. Bu görevde iken katıldığı Diyanet İşleri
                      Başkanlığı İstanbul Hizmetiçi Müftü ve Vaizler Kursunu
                      1983'te bitirdikten sonra aynı yıl Hollanda'ya din
                      görevlisi olarak gönderildi.
                    </p>
                    <p>
                      1983-84 yıllarında Hollanda'nın Breda ve Tilburg
                      şehirlerinde bir yıl Diyanet Din Görevliliği yaptıktan
                      sonra, 1985-'87 yıllarında Amsterdam Üniversitesinde (UvA)
                      Hristiyanlık üzerine Yüksek Lisans (master) eğitimini
                      tamamladı. 1988-'94 arası aynı Üniversitede (Universiteit
                      van Amsterdam), Avrupa ve İslam ülkeleriyle mukayeseli
                      olarak, Hollanda'da İlkokullar'da İslam din eğitimi
                      konusunda doktorasını yaptı. 1995-2005 arası (yarı zamanlı
                      olarak) Amsterdam İntercoffessionele PABO (Dinler arası
                      Öğretmen Eğitim AkÂdemisinde) İslam Din Dersi eğitimi
                      verdi. Aynı yıllarda Amsterdam (VUMC) ve Utrecht (UMC)
                      AkÂdemi Hastanelerinde (yarı-zamanlı olarak) İslami Manevi
                      Bakım konusunda araştırma ve uygulama görevinde bulundu.
                    </p>
                    <p>
                      2000 yılında Hollanda'nın Amersfort şehrinde Klinik Eğitim
                      Merkezinde 3 aylık (yatılı) Klinik Manevi Formasyon
                      Kursu'na katıldı (KPV). 2003-2005 yıllarında Amsterdam'da
                      Post-AkÂdemik Süpervizörlük (www.pao.nl) eğitimini
                      bitirerek resmi kurumlarda çalışan manevi bakım
                      görevlilerine süpervizörlük yaptı.
                    </p>
                    <p>
                      2005 yılı itibariyle Amsterdam VU-Üniversitesi İlahiyat
                      Fakültesi (Theologische Faculteit van Vrije Universiteit
                      Amsterdam) bünyesinde kurulmuş bulunan, İslam İlahiyat
                      Merkezinde (Centrum voor İslamitische Theologie), İslami
                      Manevi Bakım bölümü Yüksek Lisans (master) koordinatörü ve
                      süpervizör olarak Öğretim Üyeliği yaptı. Bu kurumdan 2016
                      yılında emekliye ayrılarak Türkiye'ye kesin dönüş yapmış
                      bulunan Karagül, 2017 yılından itibaren memleketi olan
                      ORDU/Ünye'de ikamet etmektedir. Karagül orta derece Arapça
                      ve Hollandaca (Flemenkçe), biraz da İngilizce bilmektedir.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      İstisnai Özellikler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        Hollanda'da (Amsterdam Üniversitesinde) İlahiyat dalında
                        doktorasını yapmış ilk müslüman ilahiyatçı (1994)
                      </li>
                      <li>
                        Hollanda Hastanelerinde ilk resmi Dini-Manevi Bakım
                        Hizmetleri Araştırma ve Uygulama Görevlisi (part-time)
                        1995-2005
                      </li>
                      <li>
                        Hollanda'nın tek Dinler Arası Pedagoji Akademisinde, ilk
                        İslam Din Eğitimi Doçenti (part-time) 1995-2005
                      </li>
                      <li>
                        Hollanda'da Manevi Bakım Görevliliği meslek olgunlaşma
                        kursuna (KPV) katılan ilk müslüman Manevi Bakım
                        Görevlisi (2000)
                      </li>
                      <li>
                        Hollanda Manevi Bakım Cemiyeti (VGVZ) İslam sektörü ilk
                        kurucu üyesi (başkan) 2001
                      </li>
                      <li>
                        Hollanda'da Manevi Bakım Meslek içi Supervisörlük
                        eğitimi alan ilk ilahiyatçı, 2003-2005
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="egitim" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Eğitim Bilgileri
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Temel Eğitim</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            1957-1963 Çınarcık Köyü İlkokulu Ünye-Tekkiraz
                          </li>
                          <li>1963-1967 Medrese usulü Arapça öğrenimi</li>
                          <li>1968-1973 Samsun İmam Hatip Okulu öğrencisi</li>
                          <li>
                            1973-1974 Çorum İmam Hatip Okulu Mezunu (6. ve 7.
                            Yılı birleştirme başarısı)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">Lisans</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            1976-1980 Samsun Yüksek İslam Enstitüsü Fıkıh-Kelam
                            Bölümü Mezunu
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Yüksek Lisans
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            1980-1983 T.C. Diyanet İşleri Başkanlığı İstanbul
                            Haseki Eğitim Merkezi Mezunu (1983)
                          </li>
                          <li>
                            1985-1987 Amsterdam Üniversitesi İlahiyat Fakültesi
                            Master Eğitimi
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">Doktora</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            1987-1994 Amsterdam Üniversitesi (UvA) İlahiyat
                            Fakültesi Mukayeseli İslam Din Eğitimi, Doktora Tezi
                            (Hollandaca, phd. 1994). YÖK onayı: 27 aralık 1996
                            (B.31.0.ÜAK.01/3782)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Post-Doktora Eğitimi
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            1996 Multiculturel Komünikasyon Kursu Amsterdam
                            (VUMC)
                          </li>
                          <li>
                            2000 Hastahanelerde Dini ve Manevi Hizmetler İhtisas
                            kursu: KPV (25 Nisan- 7 Temmuz)
                          </li>
                          <li>
                            2003-2005 Post-Akademik (PAO) meslek içi
                            supervisor'lük eğitimi, Amsterdam (www.pao.nl)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Mesleki Deneyim
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Son Çalıştığı Kurum
                        </h3>
                        <p className="text-muted-foreground mb-2">
                          Amsterdam VU (Vrij) Üniversitesi (full-time) 2005-2016
                        </p>
                        <p className="text-muted-foreground mb-2">
                          Alanı: İslam İlahiyat (Manevi Bakım ve Din Eğitimi)
                        </p>

                        <h4 className="font-medium mt-4">Akademik Görevleri</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>
                            Amsterdam VU Ilahiyat Fakültesi İslam İlahiyat
                            Merkezi Eğitim Komisyonu üyesi
                          </li>
                          <li>
                            Amsterdam VU İslam İlahiyat Merkezi Master (Yüksek
                            Lisans) Koordinatörü
                          </li>
                        </ul>

                        <h4 className="font-medium mt-4">Verdiği Dersler</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>
                            İslami manevi bakım, teori ve uygulama (staj ve
                            süpervizörlük)
                          </li>
                          <li>Akaid ve Kelam</li>
                          <li>Hitabet</li>
                          <li>Kur'an, tecvid</li>
                          <li>Tefsir</li>
                          <li>İslam eğitim pedagojisi</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Eski Resmi Görevleri
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>1980-82 Taşova Müftüsü</li>
                          <li>1983 Alucra Vaizi</li>
                          <li>
                            1983-1984 Hollanda Breda ve Tilburg şehri din
                            görevlisi, imam
                          </li>
                          <li>
                            1987-1994 Amsterdam Universitesi din eğitimi
                            araştırma görevlisi (doktora çalışması)
                          </li>
                          <li>
                            1995-2005 Amsterdam Dinlerarası Pedagoji Akedemisi
                            İslam Din Eğitimi Doçenti (part-time)
                          </li>
                          <li>
                            1996-2005 Amsterddam ve Utrecht Akademi hastaneleri
                            İslami-Manevi Bakım Hizmetleri Araştırma ve Uygulama
                            Görevlisi (part-time)
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          Aldığı Ödüller
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>
                            Hollanda ülkesel manevi bakım organize kurumu (VGVZ)
                            islam sektörü kuruluş ödülü, 6 Ekim 2000.
                          </li>
                          <li>
                            2005 Milletlerarası multikültürel manevi bakım
                            başarılı proje ödülü. Urecht Akademi hastanesi
                            manevi bakım bölüm başkanı Ari van Buren ile
                            beraber. Hollanda/Utrecht Akademi hastanesinde
                            gerçekleştirilen multi-külturel manevi bakım
                            araştırma ve uygulama projesi nedeniyle, 18 Eylül
                            Frankfurt.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="yayinlar" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Yayınlar ve Akademik Çalışmalar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          Yayınlanmış Kitaplar (2020-2022)
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              Karagül, A, Resmi Kurumlarda Profesyonel Manevi
                              Bakım Hizmetlerinde süpervizyon ve intervizyon
                              (inanç psikolojik kişisel ve mesleki gelişim)
                              (yayına hazırlanıyor), 2022.
                            </li>
                            <li>
                              Karağül, A. Batı'da resmi kurumlarda profesyonel
                              MANEVİ BAKIM HİZMETLERİ TEORİ VE PRATİĞİ, 2020
                            </li>
                            <li>
                              Karagül, A. DAMLA DAMLA. Şiirlerle HATIRALAR, 2020
                            </li>
                            <li>
                              Karagül, A. Reçete. Yeniden Müslüman olmak, 2020
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          Seçilmiş Makaleler (2010-2019)
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              Karagül, A. 'Manevi danışmanlık ve rehberlik
                              eğitiminde staj ve süpervizyonun önemi', içinde:
                              Sağlık Hizmeterinde Manevi Danışmanlık ve
                              Rehberlik (Dijital yayın). DEM Ensar Neşriyat
                              ss.89-108, 2019.
                            </li>
                            <li>
                              A.Karagul, A. 'Islamitische Seelsorge in den
                              Niederlanden. Vom Laientum zur Professionalität'
                              (Hollanda'da Islami Manevi Bakım. Armatörlük'ten
                              Profesyonelliğe). Híkma (ilmi dergi), Journal of
                              Islamic Theology and Religious Education, 2015.
                            </li>
                            <li>
                              Karagül, A. "Göç'ün 50. Yılında Hollanda'da Din ve
                              İlahiyat eğitimi' (Religious Studies and Theology
                              in the 50th Year of Migration in the Netherlands),
                              Uluslararası-International Türkiye-Hollanda
                              İlişkiler Sempozyumu, 2014.
                            </li>
                            <li>
                              Karagül, A., "Avrupa'da Müslüman Gençlerin
                              Maneviyatla İlişkisi," Gençlik ve Kültürel
                              Mirasımız (Youth and Our Cultural Heritage)
                              Uluslararası Kongre, 2014.
                            </li>
                            <li>
                              Karagül, A. 'Manevi Bakım: Anlamı, önemi, yöntemi
                              ve eğitimi (Hollanda örneği)': Spiritual Care:
                              It's meaning, Significance, Method, and Training
                              (The Netherlands Case). Dini Araştırmalar, 2012.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Kitaplar (2013)</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              Stella van de Wetering/Arslan Karagül, Zoek kennis
                              van de wieg tot het graf. Islamitisch
                              godsdienstonderwijs in Nederland (Beşikten Mezara.
                              Hollanda'da islam din egitimi),
                              Antwerpen-Apeldoorn; Garant, 2013.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>
                          Kongre ve Çalıştaylar (2010-2019)
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              Diyanet Manevi Danışmanlık ve Rehberlik Çalıştayı,
                              11-12 Haziran, Ankara, 2019.
                            </li>
                            <li>
                              Diyanet MDR standartları hazırlık toplantısı,
                              Ankara 3 Ocak, 2019.
                            </li>
                            <li>
                              MDR II. ULUSLARARASI MANEVEVİ DANIŞMANLIK VE
                              REHBERLİK KONGRESİ, 22-24 Kasım, İstanbul, 2018.
                            </li>
                            <li>
                              Diyanet Antalya Manevi Danışmanlık ve Rehberlik
                              semineri, 14 Aralık, 2018.
                            </li>
                            <li>
                              Rize İlahiyat Fakültesi Manevi Bakım konferansı,
                              2013.
                            </li>
                            <li>
                              Ankara ilahiyat Facultesi (bir haftalık) Manevi
                              Bakım dersleri, 2010, 2011, 2012.
                            </li>
                            <li>
                              Samsun İlahiyat Facultesi (bir haftalık) Manevi
                              Bakım dersleri, 2011, 2012.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>
                          Röportajlar ve Mülakatlar
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>
                              'Modernleşme arttıkça insanın manevi danışmanlığa
                              olan ihtiyacı da artmıştır'. Söyleşi: Mustafa
                              Berg. Diyanet aylık dergi, Şubat 2019, sayı: 338,
                              ss.22-25.
                            </li>
                            <li>
                              'Manevi Bakım bir vaaz ve nasihat meselesi
                              değildir', Amsterdam: Platform dergisi, röportaj:
                              Banu Çelik, 2012.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Yabancı Dil Bilgisi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Hollandaca: İyi düzeyde</li>
                      <li>Arapça (klasik): Makul düzeyde</li>
                      <li>İngilizce: Orta düzeyde</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" className="group">
          <Link href="/pak-ozel-egitim">
            PAK Özel Eğitim Merkezi Hakkında Bilgi Alın
          </Link>
        </Button>
      </div>
    </div>
  );
}
