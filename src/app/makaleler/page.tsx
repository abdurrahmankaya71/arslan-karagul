"use client";

import { FadeIn } from "@/components/animations";

export default function Makaleler() {
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
            <span className="text-primary">Makaleler</span> ve Yazılar
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Akademik ve kültürel çalışmalar
          </p>
        </div>
      </FadeIn>

      {/* İçerik Bölümü - Yapım Aşamasında */}
      <FadeIn>
        <div className="text-center py-16">
          <h2 className="text-2xl font-medium text-muted-foreground">
            Bu sayfa yapım aşamasındadır.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Makaleler yakında eklenecektir.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
