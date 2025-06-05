"use client";

import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, User, ArrowRight, FileText } from "lucide-react";

export default function Mulakatlar() {
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
            Röportajlar ve <span className="text-primary">Mülakatlar</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Manevi bakım, profesyonel danışmanlık ve rehberlik üzerine
            söyleşiler
          </p>
        </div>
      </FadeIn>

      {/* Mulakatlar Bölümü */}
      <div className="mb-16">
        <Tabs defaultValue="mulakat1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="mulakat1" className="text-sm sm:text-base">
              <MessageSquare className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Manevi Bakım Röportajı (2012)
            </TabsTrigger>
            <TabsTrigger value="mulakat2" className="text-sm sm:text-base">
              <User className="h-4 w-4 mr-2 hidden sm:inline-block" />
              Diyanet Söyleşisi (2019)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mulakat1">
            <FadeIn>
              <Card className="border border-primary/10 shadow-md">
                <CardHeader className="border-b border-primary/10 bg-primary/5">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl flex-wrap mt-6">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    "MANEVİ BAKIM BİR VAAZ VE NASİHAT MESELESİ DEĞİLDİR"
                  </CardTitle>
                  <div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <p>Röportaj: Banu Çelik, Platform Dergisi (Amsterdam)</p>
                    <p>Kayıt: 03.08.2012</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 text-pretty space-y-6">
                  <blockquote className="border-l-4 border-primary/50 pl-4 italic mb-6 text-muted-foreground">
                    <p>
                      "Manevi Bakım kişiyle birebir konuşup kişilerin iç
                      dünyalarıyla diyalog kurmalarını sağlamaktır. Bunu yapacak
                      profesyonel manevi bakım görevlilerine her toplumda büyük
                      ihtiyaç var. Ben gençlerin sunduğumuz imkanlardan
                      yararlanmasını isterim. Çünkü bu ülkede müslümanların
                      burayı bilen, buranın kültürünü anlayan ve böylelikle
                      kendi toplumuna yön verebilecek müslümanlara ihtiyaçları
                      var."
                    </p>
                    <footer className="text-right mt-2 text-sm">
                      — Dr. Arslan Karagül (2005'ten itibaren Amsterdam VU
                      Üniversitesinde İslam İlahiyat ve Manevi Bakım Görevliliği
                      Master Eğitimi veriyor)
                    </footer>
                  </blockquote>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Mesleğinizi seçmeye nasıl karar verdiniz?
                      </h3>
                      <p>
                        "İlkokulu 13 yaşında bitirdim. İmam Hatip Okulu´na
                        başlamadan önce Kur'an ve Arapça eğitimi aldım.
                        Küçüklüğümde köyümüzde namaz kıldıracak kişi çok az
                        bulunurdu. Bundan dolayı ilkokuldan sonra babam beni
                        Kur'an Kursu'na gönderdi. 15 yaşımdayken Teravih namazı
                        kıldırmaya başladım. Daha o zamanlarda namaz kıldırmayı,
                        Kur'an okumayı çok seviyordum. O yaşlarda ya siyasete
                        girip milletvekili olmak, ya da müftü olmak istiyordum,
                        yani daha yetkili biri olmak idealimdi. İlki olmadı
                        fakat müftü oldum. Temel amacım milletin önüne geçip
                        onlara hizmet vermekti. Bunu İmamlık olarak düşünürsek
                        müftü onların başıydı, kaymakam ondan daha yetkili,
                        milletvekili daha da çok yetkili. Ben müftülüğe kadar
                        uzanabildim."
                      </p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-md border-l-4 border-primary/50 italic">
                      <p>
                        Hollanda'da hastane, hapishane ve askeriyede her din
                        mensubunun kendi dini danışman ve moral desteği
                        verenleri mevcut.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Hastanede tam olarak ne yapıyordunuz?
                      </h3>
                      <p>
                        "Hastalara dini danışmanlık yapıyordum. Hasta ve
                        yakınlarıyle birebir konuşup, dertlerini dikkatli bir
                        şekilde dinleyerek hayatlarına anlam katmalarında,
                        kendileriyle iç diyaloğa girmelerine yardımcı oluyordum.
                        Bir de tabii vefaat etme durumunda aileye veya çocuğu
                        olan anne babaya dini görevlerini yerine getirmede
                        destek oluyordum. Hastalarla kontak kurmak için onların
                        durumlarının kritik bir hal almasını beklemek doğru
                        değil. Zaten Manevi Bakım'da gaye de bu değil. Hastaneye
                        ayak atan her hasta ister ayağı kırılsın, ister çok kötü
                        bir hastalığı olsun, hastadır ve esasen bir kriz
                        içerisindedir. Çünkü o hastanın dünyası değişir. Sadece
                        onun değil çevresindekilerin de."
                      </p>
                      <p className="mt-2">
                        "Mesela bir evde biri hasta olduğunda ailenin diğer
                        bireyleri de bunu içten hisseder. Hastanın hayatteyken
                        hayata nasıl daha iyi tutunması gerekir, bundan sonraki
                        hayatını nasıl kurar, ailesine ve çevresine bu nasıl bir
                        etki eder. Kendi hayat tecrübesi (hikayesiyle) dini
                        düşünce ve geleneği arasında nasıl bir bağ kurabilir,
                        kimlik ve kişilik kazanır. Bunun da ötesinde özellikle
                        hastanelerde 'tıp ahlakı' denilen konularda hastaya ve
                        hastane personeline, idaresine nasıl 'dini-manevi
                        danışmanlık' yapılması gerekirse onu yapıyorduk. Buna
                        kısaca 'Manevi Bakım' diyoruz."
                      </p>
                      <p className="mt-2">
                        "Hollanda'da hastane, hapishane ve askeriyede her din
                        mensubunun kendi dini danışman ve moral desteği
                        verenleri mevcut. Hatta bu gibi yerlerde dinli, dinsiz
                        'humanist'lerin bile manevi danışmanları var. Bu sebeble
                        manevi bakım hastalara vaaz ve nasihat etme, telkinde
                        bulunma, namaz kıldırma meselesi değil. Onların dini
                        manevi konulardaki her türlü ihtiyacını giderebilme
                        meselesi. Tabiki gerektiği yerde, isteklere bağlı
                        olarak, Kur'an okumak veya beraber dua etmek de buna
                        dahil. Ancak bu gibi istekler hastaların kendinden
                        gelmelidir. Her durumda insanlarla onların sıkıntılı
                        anlarında onların yanında olmak, onlara ilgi gösterip
                        değer vermenin, dertlerini paylaşarak, samimi bir
                        şekilde konuşmanın sağlıklarına kavuşmalarında özel bir
                        değer ve yeri bulunmaktadır."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Bu hastalarla ilgilenirken unutamadığınız olaylar oluyor
                        mu?
                      </h3>
                      <p>
                        "Mutlaka unutamadığım çok olaylar oluyor. Tabi
                        hastanelerde yaşanan olayların gizlilik derecesi olduğu
                        için herşeyi anlatamam. Meslek sırrı diye bir şey var.
                        Genel olarak mesela kocası iki evli olduğu için, uzun
                        zaman memleketinde yanlız kalarak hasta olanların
                        dertleri, çocuğu olmadığı için arayış içinde olanların
                        sıkıntıları, kürtaj yapma zorunda olanların soruları,
                        hastaların bağlı olduğu makinaların fişinin çekilip
                        çekilmeme durumundaki sıkıntılar veya çocukları olmasına
                        rağmen ziyaretcisi olmayanlar gibi bir çok konular var.
                        Bu gibi sorunların gerek tıp ahlakı (etiği) gerek,
                        hastanın (manevi) sağlığı ve sosyal ilişkileri açısından
                        üzerinde konuşulması gereken hususlar."
                      </p>
                      <p className="mt-2">
                        "Ben şahsen, yaşı benden büyük hastaların bile
                        kendileriyle oturup uzun uzun konuştuktan sonra,
                        ayrılırken elimi öpmek istekleriyle çok karşılaştım.
                        Hele psikiyatri merkezlerine düşmüş genç veya orta yaşlı
                        kadın ve erkeklerin durumları daha da zor, konuşma
                        ihtiyaçları daha da çok (psikiyatri bölümleri genelde
                        dışta olmasına rağmen Utrecht'te benim çalıştığım
                        hastanenin psikiyatri bölümü de vardı)."
                      </p>
                      <p className="mt-2">
                        "Bir de şöyle birşey var. Yurtdışında yaşayan müslüman
                        hastalar konuşmaya daha çok ihtiyac duyuyorlar. Çünkü
                        onlar sadece hasta değil, aynı zamanda, çoğu zaman bir
                        yabancı veya dil bilse de kendini böyle hissediyor. Dil
                        bilmeyenlerin veya az bilenlerin sıkıntıları daha çok
                        oluyor. Maddi manevi acılar da buna eklenince dertler
                        ikiye katlanıyor. Bir de buradaki aile bağlarının
                        Türkiye'deki gibi sıkı olmamasından dolayı yanlızlık
                        çekenler var veya hastanelerde karşılaştıkları bazı
                        tatsız durumlardan dolayı muzdalip olanlar. Bunu ancak
                        bu olayları yaşayanlar anlayabilir, dışarıdan
                        anlaşılmaz."
                      </p>
                      <p className="mt-2">
                        "Biz özellikle dini manevi konularda yardımda ve
                        destekte bulunuyoruz, telkin demiyorum, çünkü telkin
                        ayrı bir konu. Manevi destek ayrı. Yoksa sadece ölüm
                        anında kişinin yanına gidip telkinde bulunmak fazla
                        birşey ifade etmiyor bunu da isteyenler var ama artık o
                        istasyonun son durağı. Bir ara mahkumlarlada meşgul
                        oldum ve orada çalışan müslüman Manevi Bakım
                        Görevlilerine de, bir Hristiyan meslektaşla kurslar
                        verdik. Diğer din ve inanç sahibi meslektaşlardan da
                        öğrendiğimiz çok şeyler oldu. İnsanlar birbirilerini
                        mesleki sahalarda daha iyi tanıyorlar. Kısaca hastaneler
                        benim de hayata bakışımı epey değiştirdi. Belki (ruhen)
                        daha çok olgunlaştım. Ben bu konuyla ilgili bu sahada 10
                        sene meşgul olduktan sonra şimdi Üniversite'de bunun
                        eğitimini veriyor, araştırmasını yapıyorum. Yani asıl
                        burdaki öğrencilerimizi hastahane ve hapishanedeki
                        insanlarımıza yardımcı olabilmeleri için eğitiyoruz."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Peki bu yardımı hastalar mı yoksa hastahane mi talep
                        ediyor?
                      </h3>
                      <p>
                        "Hollanda'da manevi bakım hastanelerde 'Geestelijke
                        Verzorging' denilen Sağlık Bakanlığı'nın sağlık kalite
                        kanunu içerisinde yerleşmiş olan bir durum ve genel
                        temel sağlık sigortası kapsamında yer alıyor. Sağlık
                        Kalite Kanunu 1996'daki son şekliyle hastanede veya
                        hapishanede yatanların, yani 24 saatten fazla buralarda
                        kalacak olanların istediği takdirde dini manevi yardım
                        ve destekten yararlanma hakkı var. Hastanenin veya
                        hapishanenin ki orduda böyle, o insanların manevi
                        ihtiyaçlarını giderecek şekilde onlara kanunen manevi
                        hizmet sunumu mecburiyetini getiriyor. Hatta böyle bir
                        dini, manevi hizmete imkan verilmediği takdirde
                        kurumlara cezada uygulanabiliyor. Kanunda bunun özel
                        maddesi var. Ama maalesef Hollanda'da yaşayan insanların
                        yüzde 90'nının bu durumdan haberi olmamasından dolayı bu
                        yardımdan yararlanamıyorlar. Yani istemesini bilmeyene
                        bir şey verilmiyor. Bu bakımdan manevi bakımın bir sunma
                        mı yoksa isteme mi meselesi olduğu tartışma konusudur
                        genelde."
                      </p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-md border-l-4 border-primary/50 italic">
                      <p>
                        Hollanda'da mevcut 100'ün üstünde hastane 800'ün
                        üzerinde dini danışman var. Bunların sadece 8'i müslüman
                        danışman/imam.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Peki hastane veya hapishanedeki kişi bu yardıma nasıl
                        ulaşabilir?
                      </h3>
                      <p>
                        "Hollanda'da bu tür dini-manevi hizmetler kurumlarda
                        entegre olmuş bir vaziyettedir. Yani aslında resmi
                        Manevi Bakım görevlileri 14 saat hizmete hazır
                        tutulabilir ve bu çoğu yerde böyle düzenlenmiştir. Yani
                        hasta veya mahkumlar istediği an idare bunu sağlamak
                        zorundadır. Bünyelerinde henüz bir müslüman din
                        görevlisi (Manevi Bakım Görevlisi) bulundurmayan
                        hastaneler, ihtiyaç durumlarında dışarıdan, ücretli,
                        imam çağırma gibi çözümlere başvuruyorlar. Ancak dil ve
                        kültür (hastane, hapishane içi düzen ve kuralları da
                        bilme açısından bu çoğu zaman problem oluşturuyor).
                        Bünyesinde müslüman görevli çalıştıran hastanelerde ise
                        böyle bir sıkıntı yok."
                      </p>
                      <p className="mt-2">
                        "Dolayısıyla hastanede veya hapishanede çalışan herhangi
                        bir görevliden onlara ulaşabilirler. Bir çok hastanede
                        ve hapishanede konuyla ilgili broşürlerde, panolarda
                        veya internet sitelerinde genel bu konuda kime nasıl
                        ulaşılacağına dair bilgiler var. Mesela şu an
                        Hollanda'da mevcut 100'ün üstünde hastane 800'ün
                        üzerinde dini danışman var. Bunların sadece 8'i müslüman
                        danışman/imam. Hapishanelerde bu sayı daha fazla.
                        Bunların çoğunluğu Katolik ve Protestan yani hristiyan,
                        3te biri de humanistir (humanistlerin de dinli, dinsiz,
                        ateist grupları var). Yahudi ve Hindu'ların da kendi
                        görevlileri var. Yani bir dini inancı olmayan insanlara
                        bile Manevi yardım hizmeti sunuluyor zira bir dine
                        mensup olamayanların da 'manevi' bir desteğe ihtiyaçları
                        oluyor. Ben 1995'te Amsterdam'da, hastanede bu işe ilk
                        başlayan müslüman Manevi Bakım Görevlisi'ydim hem de
                        Protestan bir dini temel üzerine kurulu bir hastanede.
                        Şimdi ise aynı hastanenin Üniversitesindeki İslam
                        İlahiyat Bölümü'nde görevliyim."
                      </p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-md border-l-4 border-primary/50 italic">
                      <p>
                        Manevi Bakım kişiyle birebir konuşup kişilerin iç
                        dünyalarıyla diyalog kurmalarını sağlamaktır. Bunu
                        yapacak profesyonel manevi bakım görevlilerine her
                        toplumda büyük ihtiyaç var.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Üniversitedeki göreviniz tam olarak nedir?
                      </h3>
                      <p>
                        "Dediğim gibi, 1880'lerde Protestan bir dini esas
                        üzerine kurulmuş ama bu gün artık din ve mezhepler arası
                        bir Üniversite haline gelmiş Amsterdam Vrij (bağımsız)
                        Üniversitesi'nde 4 müslüman eğitim öğretim üyesinden
                        biriyim. Hemen şuna da değineyim. Buradaki 'bağımsız
                        üniversite tabiri Türkçe'de bazen (özgür üniversite
                        olarak da tercüme edilerek) yanlış anlaşılıyor özel veya
                        resmi olmayan bir üniversite gibi algılanıyor. Bu
                        tamamen resmi bir Üniversite ancak, kilise ve devlet
                        güdümünden bağımsız kurulduğu için vaktiyle bu ismi
                        vermişler. Bu yanlış anlaşılmasın."
                      </p>
                      <p className="mt-2">
                        "Burada şu anda bütün fakültelerde olduğu gibi Bacılır
                        denen (BA) 3 yıllık akademik islam ilahiyat bölümü ile,
                        bir ve iki yıllık da, Manevi Bakım (Geestelijke
                        Verzorging), Din dersi öğretmenliği (Islamitische
                        Educatie) ve İlahiyat Araştırmaları gibi Mastır
                        Bölümlerimiz var (ki buna Hollandaca olarak genelde:
                        Religie en Levensbeschouwing, project islam deniliyor,
                        daha fazla bilgi için: www.vu.nl)."
                      </p>
                      <p className="mt-2">
                        "Manevi Bakım ve Öğretmenlik bölümünde öğrencilerimizi
                        gerek komünikasyon teknikleri, gerekse mesleki uygulama
                        açısından iki-üç aylık stajlarla da takviye ederek
                        eğitiyoruz. Tabiki burada sadece islami dersler değil,
                        tarih, felsefe, psikoloji gibi genel dersler de
                        veriliyor ve öğrencilerimiz modern toplumun
                        beklentilerine uygun bir donanımla yetiştiriliyor.
                        Akademik bölümde ise Arapça ve Kur'an öğretimi tabiki
                        temel islami dersler arasında."
                      </p>
                      <p className="mt-2">
                        "Hollanda'da da Manevi Bakım Görevliliği öyle amatörce
                        yapılabilecek bir iş değil. Dışardan gelen bir imamın
                        hastaneye, hapishaneye ziyarete gidip, az çok dil bilse
                        bile bu işin metod ve komünikasyon tekniklerini bilmeden
                        ve de stajını yapmadan buralarda istenilen şekilde
                        faydalı olabilmesi mümkün değil. Bu bakımdan biz
                        Hollanda'da ilk olarak 2005'ten beri resmen tanınmış bir
                        kurum olarak, buralarda profesyonel olarak çalışabilecek
                        elemanlar yetiştiriyoruz."
                      </p>
                      <p className="mt-2">
                        "Profesyonellik sadece ilahiyat konularında ehil olmakla
                        değil, bu gibi kurumlarda mevcut timlerle uyum içinde,
                        mesleki kurallara uygun bir biçimde hizmet yürütebilmek
                        ve oralardaki personeli de eğitebilmekle ilgili bir
                        mesele. Bu sebeble ben hastane, hapishane, ordu gibi
                        yerlerde bugüne kadar çok az müslüman görevlinin işe
                        alınıp alınmama konusunu bu konuda istek ve ihtiyaç
                        olmayışına değil, bu işi gereği gibi yapabilecek
                        elemanların az oluşuna bağlıyorum. Şimdi bunlar artık
                        çoğalıyor ve sahadaki etkinlikleri de artıyor. Cami
                        dışındaki bu boşluğu iyi görüp buna profesyonel müslüman
                        görevliler yetiştirmek de dini bir görevdir diye
                        düşünüyorum. Anlaşılıyoruz veya anlaşılamıyoruz o başka
                        mesele."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </TabsContent>

          <TabsContent value="mulakat2">
            <FadeIn>
              <Card className="border border-primary/10 shadow-md">
                <CardHeader className="border-b border-primary/10 bg-primary/5">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl flex-wrap mt-6">
                    <User className="h-5 w-5 text-primary" />
                    "MODERNLEŞME ARTTIKÇA İNSANIN MANEVİ DANIŞMANLIĞA OLAN
                    İHTİYACI DA ARTMIŞTIR"
                  </CardTitle>
                  <div className="text-xs sm:text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                    <p>Söyleşi: Mustafa Berk, Diyanet Aylık Dergi</p>
                    <p>Şubat 2019, Sayı: 338</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 text-pretty space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Manevi danışmanlık kavramıyla ne kastedilmektedir ve bu
                        kavramın tekabül ettiği alanlar nelerdir?
                      </h3>
                      <p>
                        "Uzun yıllar boyunca yurt dışında bu alanla ilgili
                        hizmet vermiş birisi olarak bu kavramın bendenize ait
                        kullanımı manevi bakım şeklinde olacaktır. Manevi bakım,
                        insanların acılı, sıkıntılı, korkulu, yalnızlık ve
                        ümitsizlik hâllerinde, hayatındaki ani değişim;
                        hastalık, mahkûmluk, askerlik, sakatlık, yaşlılık vb.
                        kriz durumlarında ona inanç açısından destek olmak, soru
                        ve sorunlarına danışmanlık etmek, âdet ve ibadetlerine
                        rehberlik etmek ve hayatına yeni bir anlam
                        kazandırılması hususunda yardımcı olabilmektir."
                      </p>
                      <p className="mt-2">
                        "Kişilerin inancı bağlamında onlara sunulan rehberlik
                        hizmeti olarak tanımlayabileceğimiz manevi bakım kavramı
                        ülkemiz için yeni olma özelliğini taşıyor. İnsanların
                        inandığı değerler esas alınarak, bu konuda uzmanlaşmış
                        görevliler marifetiyle sunulması gereken manevi bakımda
                        inancın şekli değişebilir. İnanılan şey sistemli yapısı
                        olan bir din de olabilir, yerel bir inanış da olabilir,
                        benimsenmiş bir hayat felsefesi de olabilir. İşte manevi
                        bakım almak isteyen kişinin bu durumu önceden bilinip
                        ona uygun bir görevlinin yönlendirilmesine ihtiyaç
                        vardır. Bizim konuşacağımız İslami manevi bakımda da bu
                        yardımcı olma şekli, kişinin dinî ritüelleri dikkate
                        alınarak kendisine yardımcı olmaya çalışmak şeklinde
                        olacaktır. İnsanın görünen tarafının yanında görünmeyen
                        tarafının da varlığı dikkate alınarak bu alanda
                        çalışmalar yapılmış ve yakın tarihimizde manevi bakım
                        alanı ortaya çıkmıştır."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Manevi danışmanlık ve rehberliğin İslam dini ile olan
                        ilişkisini değerlendirecek olursak geleneğimizde bunun
                        yeri nedir?
                      </h3>
                      <p>
                        "İlk insan ve ilk inanç sisteminden itibaren manevi
                        bakım vardı diyebiliriz. Çünkü insanın olduğu yerde onun
                        ihtiyaçlarına ve sorunlarına dair geliştirilmiş çözümler
                        olmuştur. Eski zamanlarda bu alan, daha çok kürsülerden
                        verilen telkinler şeklinde karşımıza çıkıyor. İnsanlara
                        topluluklar hâlinde va'z edilerek onlara bir şeyleri
                        yapıp bir şeyleri yapmamaları gerektiği söyleniyordu.
                        Fakat çağımız insanı, bireyselleşmenin etkisiyle
                        kalabalıklar içinde yalnızlık çekmektedir. Kitle
                        iletişim araçlarının yaygınlaşması, teknolojik
                        gelişmelerin baş döndürücü bir hızda ilerlemesi üzülerek
                        belirtmek gerekir ki insana yalnızlığı hediye etmiştir."
                      </p>
                      <p className="mt-2">
                        "Dolayısıyla günümüz insanı her alanda olduğu gibi
                        manevi bakımda da özel ilgi istemektedir. Yurt dışında
                        görev yaptığım esnada, manevi bakımlarıyla yükümlü
                        olduğum Müslüman hastalarımızın çoğunluğu bize bu
                        bilgiyi teyit ettirecek biçimde bire bir ilgi
                        istemişlerdir. Kendisiyle yüz yüze gelerek, göz teması
                        kurup derdiyle dertlendiğimizi hissettirmek bu insanlar
                        için genel konuşmalardan daha etkili olmuştur. İşte bu
                        yüzden manevi bakım bir vaaz ve nasihat meselesi
                        değildir. İnsanın içinde bulunduğu ruh hâli dikkate
                        alınmak suretiyle kendisine verilmesi gereken
                        destektir."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Günümüzde önemli bir hizmet alanını oluşturan manevi
                        rehberliğe neden ihtiyaç duyuldu? Bu alanın çıkış
                        noktası konusunda neler söylersiniz?
                      </h3>
                      <p>
                        "Az önce de belirttiğimiz üzere cisim ve ruhtan meydana
                        gelmiş olan insanın manevi yöndeki ihtiyaçları bu alanın
                        doğmasına vesile olmuştur. Bir insanın maddi yani
                        fizyolojik bakımı ne kadar önemliyse manevi, psikolojik
                        bakımı da o kadar önemlidir. Bunlardan bir tanesine
                        gereken değeri verip diğerine aynı özeni göstermezsek
                        tek kanatlı bir kuşa benzeriz, dengemiz bozulur. Bundan
                        dolayı, birbirinin tamamlayıcısı niteliğindeki cisim ve
                        ruha aynı oranda bakım şarttır."
                      </p>
                      <p className="mt-2">
                        "İslam dininin ve inanç sistemlerinin hedefinde insanın
                        mutluluğu ve olgunlaşması vardır. Ulaşılması gereken
                        mutlu ve mutmain bir kalptir. Dinî-manevi bakımda
                        insanın bu dünya ile birlikte ahiret hayatına müteallik
                        hususlarda da mutluluğu esas alınır. Öyleyse hayatımız
                        boyunca cismen nasıl bakım yapıyorsak, sadece ihtiyaç
                        hâliyle sınırlı kalmaksızın manevi olarak da bakımımızı
                        yapmak zorundayız. Elbette manevi bakım insanın ihtiyacı
                        olduğu için ortaya çıkmıştır. Lakin günümüzde bana
                        soracak olursanız sadece ihtiyacı olanlara değil tüm
                        insanlara düzenli bir biçimde manevi bakım hizmeti
                        sunulmalıdır."
                      </p>
                      <p className="mt-2">
                        "İnsanların iç dünyasına girip onlarla hemhâl olmak
                        gerektiğini düşünüyorum. Sorun çıkmadan önce gerekli
                        tedbirleri alabilmek, sorunla karşılaştığında ise onunla
                        baş edebilmeyi sağlamak ancak ön manevi bakım sayesinde
                        gerçekleşir. Bundan dolayı her insan aslında manevi
                        bakıma muhtaçtır."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Yaşadığımız çağda modernleşme-din ilişkisi ve bu
                        ilişkinin manevi danışmanlık boyutu hakkında neler
                        söyleyebilirsiniz?
                      </h3>
                      <p>
                        "Modernleşmenin, sekülerleşmeyi getireceği, dinin toplum
                        ve birey nezdindeki önemini azaltacağı düşüncesinin
                        aksine dini değerler, sadece görünümü değişerek
                        hayattaki yerini her daim korumaya devam etmiştir. Zaten
                        tam tersini düşünmek, dinin insanoğlunun hayatında neden
                        var olduğunu anlayamamak, sadece kurumsal açıdan konuya
                        bakmak demektir. Modernleşme arttıkça, insanın manevi
                        danışmanlığa olan ihtiyacı da artmıştır."
                      </p>
                      <p className="mt-2">
                        "İlahiyat, diyanet, psikoloji, sosyoloji, antropoloji
                        gibi birimlerin iş birliğiyle köklerini gelenekten alıp
                        çağdaş sistemlerle yoğuran, Batı modernitesinin değil
                        İslam modernitesinin izinde ilerleyen bir manevi
                        danışmanlık söz konusu olacaktır. Bu anlamda manevi
                        danışmanlık, din, inanç ve hayat felsefesine dayalı
                        hizmetiyle insanın her iki dünyası için de gerekli bir
                        kurumdur."
                      </p>
                    </div>

                    <div className="bg-muted/30 p-4 rounded-md border-l-4 border-primary/50 italic">
                      <p>
                        Bir insanın maddi yani fizyolojik bakımı ne kadar
                        önemliyse manevi, psikolojik bakımı da o kadar
                        önemlidir. Bunlardan bir tanesine gereken değeri verip
                        diğerine aynı özeni göstermezsek tek kanatlı bir kuşa
                        benzeriz, dengemiz bozulur.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Manevi danışmanlık yapacak personelin sahip olması
                        gereken özellikler nelerdir?
                      </h3>
                      <p>
                        "Bu konuya pek çok boyutta bakmak mümkündür. Daha önce
                        manevi bakım görevlisinin yani manevi danışmanın temel
                        görevlerinin ne olduğunu, ne yapması gerektiğini ifade
                        etmiştik. Bunları yerine getirebilmesi için onun
                        kurumsal, mesleki, iletişim teknik ve yeterliliklerini
                        bilip kullanabilmesi, sağlam dinî ve ahlaki değerlerinin
                        yanında alanla ilgili psikolojik, sosyolojik bilgilere
                        de sahip olması gerekir. Konumuzla alakalı olarak
                        bakacak olursak aynı konumda görev yapan ve aynı sonucu
                        alması beklenen iki personelden birisinin almış olduğu
                        eğitimden dolayı geride kalmaması için İslami manevi
                        bakım personeli kendi inancının bilgi ve değerleriyle
                        dünya tecrübesini yoğurarak görevine icra etmelidir."
                      </p>
                      <p className="mt-2">
                        "Elbette bu kişinin uygun eğitim ve yeteneğe sahip
                        olması çok önemlidir. İlahiyat Fakültesi mezunlarından
                        ileri iletişim, genel eğitim, temel psikolojik ve
                        sosyolojik bilgilerle donanmış olanların bu alanda
                        hizmet etmeye daha uygun olacağı şüphesizdir. Zira bu
                        alan görevlileri ilişki kurdukları kişilere öğüt verir
                        değil, onlarla diyalog kurabilmelidir."
                      </p>
                      <p className="mt-2">
                        "Öğüt vermek vaizin, diyalog kurabilmek ise danışmanın
                        görevidir. Her ne kadar ülkemizde kişi kendisinden
                        yardım bekleyenle baş başa kaldığında dertlerini
                        dinledikten sonra bir şeyler anlatmak, onu inanç
                        konusunda bilgilendirmek ve tavsiyeler vermek tarzındaki
                        bir anlayış hâkim olmuşsa da manevi bakım personelinin
                        yardım sunduğu kişiyle baş başa kaldığında onu
                        dinlemesi, onun bakış açısını anlamaya çalışması,
                        karşısındakinin kendisini çok daha iyi tanımasına ve
                        bizzat kendisi yanlışı ve doğruyu görmesine olanak
                        sağlayarak destek sunması beklenir. Bu da ancak gerekli
                        eğitimi almış nitelikli personelle mümkündür."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Türkiye'de bu alanın gelişimi hakkında bilgi verir
                        misiniz?
                      </h3>
                      <p>
                        "Türkiye'de 2010 yılından itibaren değişik platformlarda
                        manevi danışmanlık ve rehberlik konusu ele alınmaktadır.
                        Ülkemizde manevi danışmanlık, Amerika ve Avrupa
                        ülkelerindeki gibi tamamen hastane ve hapishanelerde
                        özerk olarak 7 gün 24 saat görev yapan bir yapıda
                        değildir. Değişik ülkelerde, değişik uygulamalar olduğu
                        için bizim ülkemizde de şu andaki imkânlar ve mevcut
                        şartlar dikkate alınarak bir uygulama şekli
                        belirlenmiştir."
                      </p>
                      <p className="mt-2">
                        "Diyanet İşleri Başkanlığı ve üniversitelerin ortak
                        çalışmaları neticesinde ülkemizin geleneğini bilen ama
                        çağın getirdiği yenilikleri de reddederek gelişime
                        kapalı kalmayan bir şekilde yol alınmaktadır. Zira
                        herkes kendi toplumunun özelliklerine uygun olarak dini
                        hizmetleri kendine özgü şekilde sunar. Diyanet İşleri
                        Başkanlığımız iki aşamalı bir hizmet içi eğitim
                        programıyla şu an bu alanda görevlendirmek üzere
                        personel yetiştirmektedir. İleride daha akademik düzeyde
                        bu alanda lisans ve lisansüstü düzeyde öğrencilerin de
                        yetiştirileceğini düşünüyorum."
                      </p>
                      <p className="mt-2">
                        "Bir de şunu ifade etmek isterim: Avrupa'nın 1950-60'lı
                        yıllarda tecrübe ettiği göçmen olayını bugün ülkemiz
                        değişik bir şekilde yaşamaktadır. Eğer manevi bakım
                        alanında dünya tecrübesinden istifade etmezsek gelecekte
                        sorunlarla karşılaşacağımız muhakkaktır. Mevcut şartlar
                        çerçevesinde nitelikli manevi bakım personelinin
                        yetiştirilmesi, bu alanda hizmet verecek kurumun diğer
                        kurumlarla koordineli çalışması sağlanmalıdır."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Yurt dışı tecrübeniz itibariyle orada bu alanda neler
                        yapılıyor, bize bu tecrübelerinizden bahseder misiniz?
                      </h3>
                      <p>
                        "Özellikle Batı ülkelerinde inancı ne olursa olsun
                        hasta, mahkûm, yaşlı ve askerin yaşam ortamlarında, din
                        ve inançlarına uygun bir şekilde yardım alabilmesine
                        imkân tanınır. Çoğu zaman profesyonel olarak yurt
                        dışında bir kurumda manevi danışman olmak için ilahiyat
                        lisans eğitimi ve üzerine manevi bakım özel eğitimi
                        almak gerekir. Günümüzde dinlerin birbirini daha
                        yakından tanıması gerektiği düşüncesiyle inter-faith
                        (dinler arası) bir eğitim programı da söz konusudur."
                      </p>
                      <p className="mt-2">
                        "Bu eğitim programının amacı manevi danışmanların öteki
                        dinlerin danışmanlarıyla aynı çatı altında bulunmaları
                        nedeniyle birbirlerini daha yakından tanımaları ve
                        birbirlerinin değerlerine saygı duymalarıdır.
                        Hastanelerde yatanların her geçen gün etnik ve dini
                        köken bakımından farklı milletlerden olması da bu tür
                        bir eğitimi gerekli kılmaktadır."
                      </p>
                      <p className="mt-2">
                        "Manevi danışmanlıkta ilk gören ve ilk müdahale eden
                        kişi rolü de söz konusudur. Örneğin; tecrübelerimden
                        yola çıkacak olursam, insanların umutsuzluk, çaresizlik
                        içerisinde iken intihar teşebbüslerini, kürtaj olmak
                        istemelerini, stresli hasta yakınlarının hastanede
                        çalışanlara karşı sert davranışlarını gözlemleyerek bu
                        durumların önüne geçmeye çalıştım. İşte bu ve buna
                        benzer manevi danışmanın ilk gören ve ilk müdahale eden
                        kişi olma özelliği de mevcut olup oradaki görevlilerin
                        bu tür bir eğitim almaları günümüzde önem kazanmıştır."
                      </p>
                      <p className="mt-2">
                        "Avrupa'da bireyleşme arttıkça, aile çözüldükçe,
                        kurumlarla kişiler arasındaki iletişim koptuğu ölçüde
                        manevi danışmana daha çok ihtiyaç duyulmaktadır.
                        Bilhassa hastaneden taburcu olup evine dönen hasta için
                        kurumlar manevi danışmanları ev ziyaretine yönlendiriyor
                        ve bu gibi yerlerde kişi kendini ne kadar yalnız ve terk
                        edilmiş hissederse manevi bakım desteğine o kadar çok
                        ihtiyaç duyuyor. Modern çağın hastalığı olan yalnızlık,
                        Türk vatandaşı yaşlı göçmenler arasında görüldüğü için
                        pek çoğu hayatlarını özel yaşlı evlerinde veya bakım
                        evlerinde sürdürmek zorunda kalıyor."
                      </p>
                      <p className="mt-2">
                        "Başkanımızın 2017'de Belçika'da vatandaşlarımızla
                        yapmış olduğu buluşmada 'onlara manevi yardım etme'
                        görevini ilgili kurum ve görevlilere iletmesi çok önemli
                        ve kıymetlidir. Hastalık ve yaşlılık döneminde kişilerin
                        yanlarına bir dost gibi oturup dertlerini dinlemek, soru
                        ve sorunlarına bir çözüm yolu bulmak oldukça önemlidir."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Sizce, manevi danışmanlık çalışmalarının dinî bakımdan
                        önemi ve hassasiyeti nedir? Bu konuda neler söylersiniz?
                      </h3>
                      <p>
                        "Manevi danışmanlık çalışmaları bizzat dinîdir. Manevi
                        bakım dini, insani ve etik boyutları olan insanları çok
                        yönlü düşünen bir hizmet şeklidir. İslam dini her iki
                        dünya hayatını kapsar nitelikte olduğu için manevi
                        bakımcı kişinin sadece psikolojik değil, sosyolojik,
                        fiziksel, spiritüel/manevi yönlerini de bütün olarak ele
                        almak durumundadır. İslam'ın çeşitli değer kaynakları
                        vardır. Aile, kişi-Tanrı ilişkisi, tevhit ve teslim
                        olma, ibadetler, ahiret inancı, iman-amel ilişkisi vb.
                        pek çok kavram Müslümanın manevi yönüne rehberlik
                        edecek, onu yönlendirecek değerlerdir."
                      </p>
                      <p className="mt-2">
                        "Kur'an'ın bütünsel bir mesajı vardır, elbette
                        başkalarına iyilik etme, başkalarının dertleriyle
                        dertlenme, şifa verme-isteme, dua etme, hastaları ve
                        yaşlıları ziyaret etmek gibi tavsiyeler içerir. Kur'an
                        ve Sünnet'in, başka yardımcı unsurlarla birlikte manevi
                        bakım hizmetlerinde ana referans olduğu kabul
                        edilmelidir. İslam, Kur'an ve Sünnet'ten kaynağını alan,
                        ferdi motive eden, kişiye yaşama azmi veren ve dayanma
                        gücü aşılayan değerlere sahiptir. Kriz ve kayıp
                        anlarında müminlere teselli kaynağı olabilecek, onları
                        rahatlatacak dini referans ve kavramlar pek çoktur."
                      </p>
                      <p className="mt-2">
                        "Mesela sabır kavramı, İslam dininin temel
                        kavramlarından bir tanesidir. Fakat sabır kavramının en
                        yoğun olarak kullanıldığı alanlardan bir tanesi de
                        sağlık ve hastalıkla ilgili alanlardır. İnsanın sağlıklı
                        olma hâlinde harama karşı nefsini dizginleyip sabırlı
                        olabilmesi, hastalık hâlinde ve hasta olmanın getirdiği
                        sıkıntıları sabırla karşılayabilmesi lazımdır. Tabii
                        hastalık anında sabır gösterirken, pasif sabır yerine
                        aktif sabrı tercih etmek gerekir. Şöyle ki; sabır
                        gösterme, şifa aramaya mani değildir. Zira Allah, şifayı
                        verdiği gibi, aynı zamanda şifanın aranmasını da
                        istemiştir. 'Ey insanlar! Allah'ın yarattığı bir derde
                        mutlaka şifasını da yaratmıştır. Tedavi olunuz.'
                        hadisinde açık bir şekilde bu durum vurgulanmıştır."
                      </p>
                      <p className="mt-2">
                        "Şunu da ifade etmeliyim ki, dini danışmanlık ve
                        rehberlik hizmetlerinde kişileri, aslında bilinen bir
                        çerçevede yürüttüğümüz çalışmalarımızı akademik bir
                        disipline dönüştürme çabası içindeyiz. Ülkemizde uzun
                        yıllardır cami görevlileri, Kur'an kursu öğreticileri,
                        aile irşat ve rehberlik büroları personeli insanlarla
                        bire bir görüşerek çeşitli sorunlarını çözmeye
                        çalışıyorlar. Ancak bu faaliyetlerin daha sistemli,
                        kuramsal altyapıya sahip, ilmi kriterlere uygun, belirli
                        yeterlilikleri olan kişilerce ve etkin bir şekilde
                        sunulması için bu alanın geliştirilmesine gerek
                        duyulmaktadır."
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary flex items-center gap-1.5 mb-2">
                        <ArrowRight className="h-4 w-4" />
                        Diyanet İşleri Başkanlığımızın cami dışı ortamlarda bu
                        alanda sunduğu hizmetlerin gelişimi hakkında ne
                        düşünüyorsunuz?
                      </h3>
                      <p>
                        "Diyanet İşleri Başkanlığı olarak yürütülen manevi
                        rehberlik çalışmaları gelenekten köklerini alıp modern
                        çağın ihtiyaçlarına cevap verebilecek şekilde olmalıdır.
                        Avrupa'da manevi bakım görevlisi olmak için değişik
                        şartlar isteniyor. Üniversitelerde ilahiyat bitirmiş
                        olmak, staj yapmış olmak ve değişik branşlarda iletişim
                        ve psikoloji bilgisine sahip olmak gibi kriterler
                        mevcut."
                      </p>
                      <p className="mt-2">
                        "Diyanet İşleri Başkanlığımızın geçmişte dini rehberlik
                        adı altında hastane ve cezaevlerine yapılan ziyaretleri
                        göz önüne alırsak, bugün geldiğimiz yer son derece
                        memnuniyet vericidir. Çünkü son zamanlarda ülkemizde,
                        manevi danışmanlık alanında yayınlanmış çalışmalar ve
                        Diyanet İşleri Başkanlığımızın konuyla ilgili başlatmış
                        olduğu hizmet içi eğitim programlarıyla bu yöndeki
                        eksikliğin giderilmesi amaçlanmıştır. Bu çalışmalar yeni
                        başlamış olsa da bunları modern, Batı'nın şartlarına
                        uygun ama inanç değerlerimize de dayanarak
                        yapılandırdığımız takdirde ülkemizin şartlarında geçerli
                        bir manevi rehberlik modeli geliştirmemiz mümkün
                        olacaktır."
                      </p>
                      <p className="mt-2">
                        "Sayın Başkanımızın açıklamalarından, cami dışındaki
                        alanlarda sunulan hizmetlerin çeşitlendirilmesinin,
                        başkanlığımızın öncelikli hedefleri arasında yer
                        aldığını görüyoruz. Bu çerçevede her türlü insani, dini
                        ve ahlaki alanlarda Diyanet İşleri Başkanlığımızın
                        görevleri var. Türkiye'de cami dışı alan faaliyetlerinde
                        konumuz özelinde: hastane, cezaevi, huzurevi, Sevgi
                        Evleri vb. sosyal hizmet kurumlarında rehberlik ve
                        manevi destek faaliyetleri, Başkanlığımızın yürüttüğü
                        önemli faaliyetlerdendir."
                      </p>
                      <p className="mt-2">
                        "Bendenizin dâhil olduğu 'Hastanelerde Din ve Moral
                        Hizmetleri Uygulama Aşamaları (Hollanda Örneği)' ve
                        'Hollanda ve Türkiye'de Manevi Bakımın Gelişimi' adlı
                        raporlarımız, Diyanet İşleri Başkanlığımız ile
                        paylaşılmıştır. Din Hizmetleri Genel Müdürlüğümüzün 2018
                        ve 2019 yılında gerçekleştirmiş olduğu manevi
                        danışmanlık ve rehberlik hizmet içi eğitimlerin olumlu
                        sonuçlar verdiğini gözlemliyorum. Çünkü bu konuda
                        yurtdışı tecrübemle seminer ve panellerde katılımcılara
                        hitap ettim ve onların profesyonel manevi bakım
                        konusundaki istek ve çabalarını gördüm. Personel ne
                        kadar iyi yetişirse hizmetin de o kadar iyi olacağı
                        şüphesizdir. Ülke şartlarımıza uygun, insana ve
                        değerlerine saygılı bir manevi bakım modelini
                        geliştirmek, başkanlığımız için son derece önemlidir."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
