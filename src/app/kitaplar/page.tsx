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
      year: "2024",
      pages: "320",
      summary:
        "Manevi danışmanlık, destek ve rehberlik alanında profesyonel yaklaşımlar",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Bu kitap, manevi bakım hizmetlerinin teorik çerçevesi ve pratik
            uygulamaları hakkında kapsamlı bir rehber niteliğindedir.
            Profesyonel manevi destek sunma süreçlerini ve tekniklerini detaylı
            olarak ele almaktadır.
          </p>
          <p className="text-muted-foreground">
            İçerikte manevi danışmanlık, destek ve rehberlik alanında
            uluslararası standartlar ve Türkiye\'deki uygulamalar
            karşılaştırmalı olarak incelenmektedir.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">
              Kitapta Ele Alınan Konular:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Manevi bakım hizmetlerinin tarihsel gelişimi</li>
              <li>Profesyonel manevi danışmanlığın ilkeleri ve sınırları</li>
              <li>Farklı kurumlarda manevi destek uygulamaları</li>
              <li>
                Hastane, hapishane ve eğitim kurumlarında manevi rehberlik
              </li>
              <li>Kriz durumlarında manevi destek sağlama teknikleri</li>
              <li>Manevi bakım hizmetlerinde etik ilkeler</li>
              <li>Vaka örnekleri ve çözüm yaklaşımları</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "yeniden-musluman",
      title: "Yeniden Müslüman Olmak",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2023",
      pages: "280",
      summary: "Modern dünyada İslami kimliği yeniden keşfetme süreci",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            "Yeniden Müslüman Olmak", modern dünyada İslami kimliğin yeniden
            keşfedilmesi ve yorumlanması sürecini ele alan bir eserdir. Kitap,
            geleneksel İslami değerleri korurken çağdaş yaşamın getirdiği
            zorluklarla nasıl başa çıkılabileceğini incelemektedir.
          </p>
          <p className="text-muted-foreground">
            Batı\'da yaşayan Müslümanların tecrübeleri ve karşılaştıkları
            zorluklar üzerinden, İslami kimliğin modern dünyada nasıl
            yaşanabileceğine dair pratik öneriler sunulmaktadır.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">
              Kitapta Ele Alınan Konular:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Seküler toplumda dini kimliği koruma stratejileri</li>
              <li>İslami değerlerin güncel yorumları</li>
              <li>Batı'da İslam: zorluklar ve fırsatlar</li>
              <li>Müslüman gençlerin kimlik arayışları</li>
              <li>Dini ve kültürel değerlerin harmonizasyonu</li>
              <li>Çokkültürlü toplumlarda İslami yaşam modelleri</li>
            </ul>
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
      pages: "160",
      summary: "Hayat tecrübelerinin şiirsel anlatımı",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            \"Şiirlerle Hatıralar\", Dr. Arslan Karagül\'ün yaşam tecrübelerini
            şiirsel bir dille anlattığı edebi bir eserdir. Yazarın farklı
            dönemlerde kaleme aldığı şiirleri ve bu şiirlerin arkasındaki
            hikayeleri içermektedir.
          </p>
          <p className="text-muted-foreground">
            Kitap, bireysel anıların yanı sıra toplumsal olaylara da şiirsel bir
            bakış sunmakta ve okuyucuyu duygusal bir yolculuğa çıkarmaktadır.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">
              Kitapta Ele Alınan Temalar:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Yurt özlemi ve gurbet hikayeleri</li>
              <li>Manevi arayış ve kendini keşfetme</li>
              <li>Aile bağları ve toplumsal değerler</li>
              <li>Doğa ve insan ilişkisi</li>
              <li>Zaman ve değişim kavramları</li>
              <li>Kültürel kimlik ve aidiyet duygusu</li>
            </ul>
          </div>
          <blockquote className="border-l-4 border-primary/30 pl-4 italic text-muted-foreground mt-4">
            \"Anılar zamana yenilmez, şiirlerle ölümsüzleşir.\"
          </blockquote>
        </div>
      ),
    },
    {
      id: "mistik-yollar",
      title: "Mistik Yollar ve Manevi Yolculuklar Rehberi",
      icon: <Award className="h-6 w-6 text-primary" />,
      coverImage: "/images/book-cover-placeholder.jpg",
      year: "2021",
      pages: "350",
      summary: "Farklı kültür ve geleneklerdeki manevi arayış yolları",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            \"Mistik Yollar ve Manevi Yolculuklar Rehberi\", farklı kültür ve
            geleneklerdeki manevi arayış yollarını inceleyen karşılaştırmalı bir
            çalışmadır. İslam tasavvufu başta olmak üzere, dünya genelindeki
            mistik gelenekler ve manevi disiplinler hakkında detaylı bilgiler
            sunmaktadır.
          </p>
          <p className="text-muted-foreground">
            Kitap, manevi gelişim arayışında olan modern insana, farklı
            geleneklerin sunduğu metotları ve teknikleri tanıtarak, kendi
            yolculuğunu şekillendirmesine yardımcı olmayı amaçlamaktadır.
          </p>
          <div className="mt-6">
            <h4 className="font-medium text-primary mb-2">
              Kitapta Ele Alınan Konular:
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>İslam tasavvufunda manevi eğitim metotları</li>
              <li>Farklı kültürlerde meditasyon ve tefekkür uygulamaları</li>
              <li>Mistik geleneklerin ortak noktaları ve farklılıkları</li>
              <li>Modern dünyada manevi disiplinlerin uygulanması</li>
              <li>Manevi rehberlik ve şeyhlik kurumu</li>
              <li>Mistik deneyimlerin psikolojik ve sosyolojik boyutları</li>
              <li>Günümüzde manevi arayış: zorluklar ve imkanlar</li>
            </ul>
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
              <p className="mb-4">
                Dr. Arslan Karagül\'ün kitapları hakkında daha detaylı bilgi
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
