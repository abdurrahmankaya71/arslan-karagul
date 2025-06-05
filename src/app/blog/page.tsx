"use client";

import { useState } from "react";
import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  ChevronRight,
  Languages,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

// Makale tipi tanımlaması
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

// Örnek makale yapısı - gerçek makaleler daha sonra eklenecek
const articlePlaceholders: { tr: Article[]; nl: Article[] } = {
  tr: [
    // Türkçe makaleler daha sonra eklenecek
  ],
  nl: [
    {
      id: "spiritueel-recept-vasten",
      title: "Spiritueel recept: VASTEN",
      excerpt: "VASTEN IS GEZONDHEID EN DANKBAARHEID",
      date: "6 Maart 2025",
      category: "Spiritualiteit",
      readTime: "8 min",
    },
    {
      id: "liefdevolle-opvoeding",
      title: "Liefdevolle opvoeding is beter dan de baas spelen",
      excerpt:
        "Het geven van een klap aan lastige jongens is niet de methode voor moslimopvoeders.",
      date: "30 September 2008",
      category: "Opvoeding",
      readTime: "10 min",
    },
    {
      id: "islamitisch-geestelijke-verzorging",
      title: "Islamitisch geestelijke verzorging is iets anders dan zending",
      excerpt:
        "De eerste instructie die de stagiaires voor geestelijke verzorging te horen krijgen is dat ze bij het bed van de patiënt niet bezig mogen zijn met de dawa.",
      date: "18 Februari 2005",
      category: "Geestelijke Verzorging",
      readTime: "5 min",
    },
  ],
};

export default function Blog() {
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık Bölümü */}
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 bg-gradient-to-r from-primary/20 to-blue-500/20 px-5 py-2 rounded-full">
            <p className="text-sm font-medium text-primary">
              Makaleler / Artikelen
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Dr. Arslan Karagül <span className="text-primary">Makaleleri</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            İslami Manevi Bakım, Din Eğitimi ve Süpervizyon konularında akademik
            ve bilgilendirici makaleler
          </p>
        </div>
      </FadeIn>

      {/* Dil Seçimi */}
      <FadeIn>
        <div className="max-w-4xl mx-auto mb-10">
          <Tabs
            defaultValue="tr"
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-64">
                <TabsTrigger value="tr" className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full overflow-hidden inline-flex items-center justify-center bg-red-600 text-white text-xs font-bold">
                    TR
                  </span>
                  Türkçe
                </TabsTrigger>
                <TabsTrigger value="nl" className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full overflow-hidden inline-flex items-center justify-center bg-blue-600 text-white text-xs font-bold">
                    NL
                  </span>
                  Nederlands
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tr">
              <div className="space-y-8">
                <BackgroundGradient className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Türkçe Makaleler
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Dr. Arslan Karagül tarafından yazılan Türkçe makaleler.
                    Makaleler İslami Manevi Bakım, Din Eğitimi ve Süpervizyon
                    konularını içermektedir.
                  </p>
                </BackgroundGradient>

                {articlePlaceholders.tr.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    language="tr"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nl">
              <div className="space-y-8">
                <BackgroundGradient className="bg-primary/5 p-6 rounded-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    Nederlandse Artikelen
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Artikelen geschreven door Dr. Arslan Karagül in het
                    Nederlands. De artikelen behandelen onderwerpen zoals
                    Islamitische Geestelijke Verzorging, Religieus Onderwijs en
                    Supervisie.
                  </p>
                </BackgroundGradient>

                {articlePlaceholders.nl.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    language="nl"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </FadeIn>

      {/* Bilgilendirme Bölümü */}
      <FadeIn direction="up">
        <div className="max-w-4xl mx-auto mt-16 p-6 border border-border/40 rounded-xl bg-background/50 text-center">
          <Languages className="h-8 w-8 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">
            İki Dilde Makaleler / Artikelen in Twee Talen
          </h3>
          <p className="text-muted-foreground">
            Makaleler, Dr. Arslan Karagül'ün Türkçe ve Hollandaca dillerindeki
            akademik çalışmalarını içermektedir. Dil seçeneğini değiştirerek
            farklı dillerdeki makalelere erişebilirsiniz.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

// Makale kartı bileşeni
function ArticleCard({
  article,
  language,
}: {
  article: Article;
  language: "tr" | "nl";
}) {
  const readMoreText = language === "tr" ? "Devamını Oku" : "Lees Meer";
  const publishedText = language === "tr" ? "Yayınlanma:" : "Gepubliceerd:";
  const readTimeText = language === "tr" ? "Okuma Süresi:" : "Leestijd:";

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="bg-muted/30 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {article.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {article.date}
          </div>
        </div>
        <CardTitle className="mt-2 text-xl">{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-muted-foreground mb-6">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            {readTimeText} {article.readTime}
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-primary hover:text-primary/80"
          >
            <Link
              href={`/blog/${article.id}`}
              className="flex items-center gap-1"
            >
              {readMoreText}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
