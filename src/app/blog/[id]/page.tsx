"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { FadeIn, BackgroundGradient } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  Clock,
  ArrowLeft,
  Languages,
  BookOpen,
  Share2,
  Printer,
} from "lucide-react";
import Link from "next/link";

// Makale tipi tanımlaması
interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  language: "tr" | "nl";
}

// Örnek makale verileri - gerçek makaleler daha sonra eklenecek
const articles: Article[] = [
  {
    id: "spiritueel-recept-vasten",
    title: "Spiritueel recept: VASTEN",
    excerpt: "VASTEN IS GEZONDHEID EN DANKBAARHEID",
    content: `
      <div class="article-meta">
        <p>Auteur: Arslan Karagül</p>
        <p>Gepensioneerd docent, Vrije Universiteit Amsterdam, Faculteit Godgeleerdheid</p>
      </div>
      
      <h2>Spiritueel recept: VASTEN</h2>
      <h3>VASTEN IS GEZONDHEID EN DANKBAARHEID</h3>
      
      <p>Onlangs werd in de Nederlandse krant Trouw een gesprek gepubliceerd tussen een ‎islamitische en een christelijke theoloog over vasten in de islam en het christendom**. In dit ‎gesprek werd vasten uitsluitend besproken als een spirituele discipline en een vorm van ‎sociale solidariteit. Opmerkelijk genoeg werd er geen aandacht besteed aan de effecten van ‎vasten op de gezondheid. Nochtans is vasten, naast een vorm van aanbidding en spirituele ‎discipline, ook een belangrijk middel om de gezondheid te beschermen. Daarom is het ‎zinvol om het vasten in de islam, in tegenstelling tot de sterk afgezwakte vorm binnen het ‎christendom, ook vanuit een gezondheidskundig perspectief te bekijken.‎</p>
      
      <p>Vandaag de dag vasten, naar schatting, anderhalf miljard van de ongeveer twee miljard ‎moslims wereldwijd tijdens de Ramadan een maand lang van ochtendschemering tot ‎zonsondergang, zonder eten en drinken. De werkelijke reden achter deze praktijk is niet ‎alleen spirituele groei en sociale solidariteit, maar ook gezondheidsbescherming. ‎Wetenschappelijke studies beginnen steeds vaker aan te tonen hoe heilzaam vasten, zoals ‎voorgeschreven in de islam, is voor de gezondheid. De Koran heeft ons dit echter al 1400 ‎jaar geleden geopenbaard en stelt dat vasten een verplichting is die ook aan eerdere ‎gemeenschappen is opgelegd (Koran, 2:183).‎</p>
      
      <p>In het christendom daarentegen is de praktijk van vasten, zoals die ook in de Bijbel wordt ‎genoemd (Matteüs 4:2) en zoals die in het voorbeeld van Jezus Christus bestaat, in de loop ‎der tijd vervaagd tot het slechts één maaltijd per dag eten of het vermijden van vlees- en ‎zuivelproducten op bepaalde religieuze dagen. Hierdoor is de oorspronkelijke ‎gezondheidswaarde en diepere betekenis van vasten grotendeels verloren gegaan.‎</p>
      
      <p>Wetenschappelijk onderzoek toont aan dat vasten pas echt effectief is wanneer men ‎minstens 12 tot 16 uur achtereen niet eet en drinkt. Dit komt doordat het lichaam schadelijke ‎stoffen pas na deze periode kan verbranden en elimineren. Het is dan ook veelzeggend dat ‎het Arabische woord Ramadan niet alleen "hitte" en "verbranden" betekent, maar ook ‎‎"regen" (wat staat voor zuivering en verfrissing). Dit benadrukt dat vasten, gedurende een ‎bepaalde periode, een diepgaande betekenis heeft voor zowel de lichamelijke als geestelijke ‎gezondheid.‎</p>
      
      <p>Voor het lichaam betekent dit dat door gedurende een bepaalde tijd niet te eten, drinken of ‎seksuele verlangens na te streven, de gezondheid wordt beschermd en ongezonde cellen in ‎het lichaam worden vernieuwd. Dit werd bijvoorbeeld bevestigd door de Japanse ‎wetenschapper Yoshinori Ohsumi, die in 2016 de Nobelprijs won voor zijn ontdekking van ‎autofagie, een proces dat direct verband houdt met vasten. Autofagie is een mechanisme ‎waarbij cellen, bij een tekort aan voedingsstoffen, hun eigen beschadigde en overbodige ‎componenten afbreken om energie te produceren. Dit proces bevordert celvernieuwing, ‎versterkt het immuunsysteem en vertraagt het verouderingsproces.‎</p>
      
      <p>Op mentaal en spiritueel niveau helpt vasten ook om stresshormonen in de hersenen te ‎reguleren, waardoor het risico op depressie en angst afneemt. Dit alles herinnert ons aan de ‎woorden van de laatste profeet van de İslam, Mohammed (vzmh): "Vast en je zult gezond ‎worden." De islam biedt zelfs verzachtingen voor zieken, ouderen en mensen die niet in staat ‎zijn te vasten, wat aantoont dat gezondheid voorop staat in het geloof.‎</p>
      
      <p>Binnen het christendom echter, zoals de christelijke theoloog Brouwers in het genoemde ‎gesprek aangaf, wordt vasten niet als een verplichting van God beschouwd en wordt het niet ‎vanuit gezondheidskundig perspectief benaderd, maar louter als een spirituele discipline en ‎economische bewustwording. Brouwers verklaarde: "In de maatschappij hechten we niet meer zoveel waarde aan discipline. Maar als we maar toe blijven geven aan onze impulsen, dan raakt de aarde uitgeput. We moeten matigen om de wereld leefbaar te houden, dat is ook mijn motivatie om mee te doen. En nu, in deze angstige tijden, is het goed om te oefenen in omgaan met minder, met tekorten, met voorraden die opraken."</p>
      
      <p>Moslim theoloog M. Ajouaou gaf op zijn beurt aan dat hij, uit respect voor ‎godsdienstvrijheid, een moslim die niet vast, niet als een "slechte moslim" wil bestempelen. ‎Maar eigenlijk gaat het hier niet om goed of slecht, maar om nut en schade. Iemand die het ‎hele jaar door overmatig eet zonder enige onderbreking, schaadt in de eerste plaats zichzelf. ‎Dit is precies de reden waarom vasten volgens de Koran aan elke gemeenschap is opgelegd. ‎Als vasten schadelijk zou zijn, zou het niet worden voorgeschreven. In de islam wordt er ‎inderdaad gevast omdat God het heeft bevolen, maar vasten is niet alleen bedoeld als ‎spirituele discipline of vorm van solidariteit, maar ook als een middel om de gezondheid te ‎behouden.‎</p>
      
      <p>Daarom gehoorzaamt elke moslim die vast niet alleen dit gebod, maar dankt hij ook zijn ‎Schepper die hem dit heeft geleerd. Vasten is zowel gezondheid als dankbaarheid.‎</p>
      
      <p>Zoals Bernard Shaw treffend zei: "In de toekomst zullen artsen hun patiënten voorschrijven ‎wat moslims al eeuwenlang doen: het gebed (salat) en het vasten."‎</p>
      
      <div class="article-footnote">
        <p>** Maaike van Houten, 6 maart 2025, Theologisch elftal – Vastentijd: Waarom zou je eigenlijk ‎moeten vasten?</p>
      </div>
    `,
    date: "6 Maart 2025",
    category: "Spiritualiteit",
    readTime: "8 min",
    language: "nl",
  },
  {
    id: "islamitisch-geestelijke-verzorging",
    title: "Islamitisch geestelijke verzorging is iets anders dan zending",
    excerpt:
      "De eerste instructie die de stagiaires voor geestelijke verzorging te horen krijgen is dat ze bij het bed van de patiënt niet bezig mogen zijn met de dawa.",
    content: `
      <div class="article-meta">
        <p>Gepubliceerd in: Trouw</p>
        <p>Datum: 18 februari 2005</p>
        <p>Auteur: Arslan Karagül</p>
      </div>
      
      <h2>Islamitisch geestelijke verzorging is iets anders dan zending</h2>
      
      <p>De eerste instructie die de stagiaires voor geestelijke verzorging -van welke stroming dan ook- te horen krijgen is dat ze bij het bed van de patiënt, of in gesprek met de gedetineerden niet bezig mogen zijn met de dawa, evangeliseren of verkondiging. De geestelijk verzorgers moeten niet uitgaan van hun eigen boodschap en behoefte, maar van die van de patiënt/cliënt.</p>
      
      <p>Hierin is geen plaats voor dawa of tabligh (het Arabische woord voor verkondiging) in de beide betekenissen van het woord, zoals dat uiteengezet is door mijn collega-theoloog M. Ajouaou (Trouw, 10 feb). Hij maakt een onderscheid tussen dawa als fanatieke werkzaamheden van utra-orthodoxe groepen, en de onschuldiger variant uit de praktijk: 'geloofsbegeleiding door geestelijken, met de daarbij behorende taken zoals verkondiging, raadgeving en pastorale zorg'. Dit behoort tot de inzet van imams, vindt Ajouou.</p>
      
      <p>Als hij meent dat 'ook ziekenhuis- en gevangenisimams dawa tot hun takenpakket zouden moeten rekenen', ben ik het niet met hem eens. Ik ben al tien jaar in dit veld werkzaam, als moslim geestelijk verzorger, maar daarin ben ik niet bezig met deze dawa in beide betekenissen van het woord. Met de hedendaagse dialogische aanpak van het werk van geestelijke begeleiding en raadgeving is er geen sprake meer van eenrichtingsverkeer. De geestelijk verzorger is meer een gids of tolk tussen traditie en ervaring van de patiënt/cliënt. Hij begeleidt en ondersteunt mensen vanuit hun eigen behoefte volgens hun levensbeschouwing. Dat is iets anders dan traditioneel verkondigend bezig zijn.</p>
      
      <p>Ajouaou meent dat het tijd is voor een leerstoel over dawa. Ik zou eerder een leerstoel voor islamitische geestelijke verzorging willen zien, of twee leerstoelen naast elkaar, zodat de moskee-imams ook kunnen overstappen naar ziekenhuis of gevangenis-imams in de hedendaagse betekenis van het woord. Zou dat misschien een optie zijn voor de VU in haar streven naar het opleiden van moslim theologen-imam?</p>
    `,
    date: "18 Februari 2005",
    category: "Geestelijke Verzorging",
    readTime: "5 min",
    language: "nl",
  },
  {
    id: "liefdevolle-opvoeding",
    title: "Liefdevolle opvoeding is beter dan de baas spelen",
    excerpt:
      "Het geven van een klap aan lastige jongens is niet de methode voor moslimopvoeders.",
    content: `
      <div class="article-meta">
        <p>Gepubliceerd in: Trouw Podium</p>
        <p>Datum: 30 september 2008</p>
        <p>Auteur: Arslan Karagül</p>
        <p>Docent bij het Centrum voor Islamitische Theologie van de VU</p>
      </div>
      
      <h2>Liefdevolle opvoeding is beter dan de baas spelen</h2>
      
      <p>Het geven van een klap aan lastige jongens is niet de methode voor moslimopvoeders.</p>
      
      <p>De voorstellen die Ali Eddaoudi vorige week in Trouw deed over de opvoeding van Marokkaanse jongeren vind ik verbazingwekkend en zorgelijk. Hij vond dat we jongeren moesten tonen wie de baas is. Een draai om de oren kon volgens hem heel effectief zijn.</p>
      
      <p>Maar juist het gedrag om de baas te willen spelen verhardt de kinderen en de jeugd. Geweld tegen geweld, oog om oog maakt iedereen blind en wild. Zo moeten de moslimopvoeders het zeker niet aanpakken. Maar wel met een zachte en liefdevolle benadering.</p>
      
      <p>Een zachte aanpak met liefde werkt effectiever dan een harde aanpak zoals elke ouder het thuis kan ervaren. Bovendien is zachtmoedigheid de ideale aanpak in de Koran (3:159; 20:44) en de praktijk van de Profeet zelf. Een pleidooi voor een harde aanpak door een 'tikje' te geven en dergelijke klinkt niet alleen vreemd in de oren van de moderne wereld, maar ook als een ouderwetse pedagogische aanpak die niet meer helpt in een context waarin de kinderen vrij opgevoed zijn.</p>
      
      <p>Dat wil niet zeggen dat een goede discipline en structuur door middel van alternatieve straffen, andere dan het lijfelijke, niet nodig is. De taak van de opvoeders van vandaag is het zoeken naar alternatieve straffen, zoals het even apart zetten van het kind of het even niet met speelgoed laten spelen. Dit werkt beter dan het geven van een klap. Slaan moeten de opvoeders in een moderne wereld afleren. Want met een lijfelijke straf veroorzaak je niet alleen haatgevoel in het hart van de kinderen/jeugd maar soms ook lichamelijke schade. Een klap op de oren, of het kindje om hoog te tillen door het oor te trekken zoals in de oude opvoedingspraktijk een pijnlijke gewoonte was, kan tot doofheid leiden.</p>
      
      <p>Als we dit soort opvoedingsmethode door willen trekken tot bijvoorbeeld de man-vrouwverhoudingen dan is het slaan van vrouwen vanuit een harde pedagogiek om de baas te spelen het logische gevolg hiervan. Dat zal zich weer weerspiegelen in het sociale omgaan met mensen en dieren, een geweldspiraal waaraan geen einde komt. Het probleem ligt dus niet in een zachte aanpak, maar in de liefdeloze en respectloze aanpak. Maar ook in een discriminerende en stigmatiserende aanpak.</p>
      
      <p>Kinderen en jongeren zijn uiterst goed in het imiteren van zulke gedragingen. Mijn generatie uit Turkije heeft een ander gedrag aangeleerd gekregen dan onze kinderen en jongeren hier. Wij leerden om onmiddellijk op te staan wanneer ouders binnenkwamen. Helemaal als de leraar de klas betrad. Tegenwoordig merken de kinderen niet eens of een leraar al in de klas is of niet. Ze gaan gewoon door met kletsen tot de leraar hen met een harde stem tot de orde roept.</p>
      
      <p>Hetzelfde gedrag vertonen ze vervolgens weer thuis. Kinderen zijn niet onder de indruk als een gast binnen treedt. Ze zitten gewoon te zappen met de afstandbediening, of zijn lekker bezig met hun computerspelletjes. Hetzelfde gedrag merk je weer in het openbaar vervoer. Lekker blijven zitten terwijl de ouderen of zwangere vrouwen moeten staan. Opvoeden gebeurt niet alleen in de familie maar ook op school en in de gemeenschap. Wij hebben eerder liefdevolle en respectvolle ouders en leraren nodig dan politieagenten. Ouders die respectvol over anderen gaan spreken en liefdevol zijn voor hun kinderen. Leraren die de kinderen als eigen kinderen gaan behandelen en zorg dragen voor hun carrière en hun succes in het leven. De baas spelen werkt niet.</p>
      
      <h3>Reacties uit de krant</h3>
      <div class="comments">
        <p><strong>Carla, Tilburg:</strong> "Vroeger las de mens vaak niet zelf maar werdt hij/zij met een tekst uit een 'heilig'boek die een ouder van toepassing vond om de oren geslagen. Het feit dat jongeren nu zelf lezen en ook kritisch durven te denken zet beslist heel wat gezinnen op z'n kop..."</p>
        
        <p><strong>P. Musters, Zeist:</strong> "Nog steeds wordt blijkbaar streng, duidelijk en conseqent handelen verward met 'de baas' spelen wat je blijkbaar met stemverheffeing en agressie bewerkstelligt..."</p>
        
        <p><strong>Herman N., Amsterdam:</strong> "De baas spelen werkt wellicht niet, maar de opvoeder/lera(a)r(es) moet een natuurlijk overwicht hebben. Het moet overigens duidelijk zijn wie de ouder en wie het kind is, wie de leraar en wie de leerling is..."</p>
      </div>
    `,
    date: "30 September 2008",
    category: "Opvoeding",
    readTime: "10 min",
    language: "nl",
  },
];

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // ID'ye göre makaleyi bul
    const foundArticle = articles.find((article) => article.id === id);

    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      notFound();
    }
  }, [id]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Makale yükleniyor...</p>
        </div>
      </div>
    );
  }

  const isturkish = article.language === "tr";
  const backText = isturkish ? "Tüm Makaleler" : "Alle Artikelen";
  const publishedText = isturkish ? "Yayınlanma:" : "Gepubliceerd:";
  const readTimeText = isturkish ? "Okuma Süresi:" : "Leestijd:";
  const printText = isturkish ? "Yazdır" : "Afdrukken";
  const shareText = isturkish ? "Paylaş" : "Delen";

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          {/* Üst Bilgi ve Navigasyon */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 -ml-2">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                {backText}
              </Link>
            </Button>

            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {article.category}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {publishedText} {article.date}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {readTimeText} {article.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground">{article.excerpt}</p>
          </div>

          {/* Makale İçeriği */}
          <BackgroundGradient className="bg-card/50 p-8 rounded-xl mb-8">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </CardContent>
            </Card>
          </BackgroundGradient>

          {/* Alt Bilgi */}
          <div className="flex justify-between items-center border-t border-border/40 pt-6 mt-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <Languages className="h-4 w-4 mr-2" />
              <span>{isturkish ? "Türkçe" : "Nederlands"}</span>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Printer className="h-4 w-4" />
                {printText}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                {shareText}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
