import type { Metadata } from "next";
import ScrollReveal from "./components/ScrollReveal";
import CountUp from "./components/CountUp";
import ParallaxImage from "./components/ParallaxImage";

export const metadata: Metadata = {
  title: "ビジネスの成長を支える、最適なオフィス選び。| 法人向けオフィス賃貸",
  description: "物件探しから契約まで最短2週間。コスト削減もプロがサポート。法人専門のオフィス仲介サービス。",
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
  office1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  office2: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
  office3: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
  office4: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  skyline: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80",
  building: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1400&q=80",
};

export default function LP3() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ━━━ Header ━━━ */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C5A572] rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm tracking-[0.15em] font-light">SAMPLE REALTY</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-luxury text-xs px-5 py-2 rounded-full tracking-wider">
              無料相談
            </a>
          </div>
        </div>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section className="relative min-h-screen flex items-center">
        <img src={IMAGES.hero} alt="Office building" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20">
          <div className="max-w-2xl">
            <ScrollReveal delay={200}>
              <div className="flex gap-6 md:gap-10 mb-10">
                {[
                  { num: 500, suffix: "+", label: "法人契約実績" },
                  { num: 15, suffix: "年", label: "専門実績" },
                  { num: 30, suffix: "%", label: "平均コスト削減" },
                ].map((s, i) => (
                  <div key={i}>
                    <CountUp end={s.num} suffix={s.suffix} className="text-[#C5A572] text-2xl md:text-3xl font-light" />
                    <p className="text-white/40 text-[10px] tracking-wider mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
                ビジネスの成長を支える、
                <br />
                <span className="animate-shimmer font-normal">最適なオフィス選び。</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-lg">
                物件探しから契約まで、最短2週間。
                <br />コスト削減もプロがサポート。法人専門のオフィス仲介サービス。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-luxury px-8 py-4 rounded-full text-sm tracking-wider text-center">
                  無料で相談する
                </a>
                <a href="#services" className="px-8 py-4 rounded-full text-sm tracking-wider border border-white/20 text-white/80 hover:bg-white/5 transition-all text-center">
                  サービスを見る
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-subtle-float">
          <span className="text-white/30 text-[10px] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C5A572] to-transparent" />
        </div>
      </section>

      {/* ━━━ Pain Points ━━━ */}
      <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Challenges</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-3xl font-light mt-6">こんなお悩みはありませんか？</h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {[
              "事業拡大に伴い、今のオフィスが手狭になってきた",
              "賃料を見直してコストを削減したい",
              "移転手続きに時間をかけたくない",
              "クライアントに見せても恥ずかしくないオフィスが欲しい",
              "居抜きやSOHO可の物件を探している",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm luxury-card">
                  <div className="w-2 h-2 bg-[#C5A572] rounded-full flex-shrink-0" />
                  <p className="text-sm md:text-base text-gray-700">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Strengths ━━━ */}
      <section id="services" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Strengths</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-4xl font-light mt-6">
                選ばれる<span className="text-gold-gradient">5つ</span>の理由
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6 mb-6">
            {[
              { num: "01", title: "法人専門のオフィス仲介", desc: "法人向けオフィスに特化した豊富な物件データベース。一般非公開の物件情報も多数保有。", img: IMAGES.office1 },
              { num: "02", title: "最短2週間のスピード契約", desc: "物件選定から契約手続きまでスピーディーに対応。ビジネスの成長を止めません。", img: IMAGES.office2 },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="glass rounded-2xl overflow-hidden luxury-card h-full">
                  <div className="img-zoom aspect-[16/9]">
                    <img src={r.img} alt={r.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="p-6">
                    <span className="text-[#C5A572] text-2xl font-light">{r.num}</span>
                    <h3 className="text-lg font-medium mt-2">{r.title}</h3>
                    <p className="text-white/50 text-sm mt-2 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "03", title: "コスト削減の提案力", desc: "フリーレント・敷金減額交渉を得意とし、平均30%のコスト削減を実現。" },
              { num: "04", title: "ワンストップ対応", desc: "物件探しから内装設計・施工・引っ越しまでトータルサポート。" },
              { num: "05", title: "移転プロジェクトマネジメント", desc: "スケジュール管理からコスト管理まで、担当者の負担を最小限に。" },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass rounded-2xl p-6 luxury-card h-full">
                  <span className="text-[#C5A572] text-2xl font-light">{r.num}</span>
                  <h3 className="text-base font-medium mt-2">{r.title}</h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Office Types ━━━ */}
      <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Office Types</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-3xl font-light mt-6">取り扱い物件タイプ</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {[
              { name: "一般オフィス", size: "10坪〜100坪以上", desc: "ビジネスの規模に合わせた最適なオフィス空間", img: IMAGES.office1 },
              { name: "SOHO・マンションオフィス", size: "1〜5名向け", desc: "スタートアップ・フリーランスに最適", img: IMAGES.office3 },
              { name: "居抜きオフィス", size: "内装費用大幅削減", desc: "前テナントの内装を活用しコスト抑制", img: IMAGES.office4 },
              { name: "シェアオフィス", size: "短期利用OK", desc: "初期費用を最小限に、すぐにビジネス開始", img: IMAGES.office2 },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm luxury-card border border-gray-100">
                  <div className="img-zoom aspect-[16/9]">
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">{s.name}</h3>
                      <span className="text-xs bg-[#0A0A0A] text-[#C5A572] px-3 py-0.5 rounded">{s.size}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Flow ━━━ */}
      <ParallaxImage src={IMAGES.skyline} alt="City skyline" className="py-32 md:py-44" overlay="bg-black/75">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Flow</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-4xl font-light mt-6">ご利用の流れ</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "お問い合わせ", desc: "フォームまたはお電話で。初回ヒアリング日程を調整します。" },
              { num: "02", title: "ヒアリング・要件整理", desc: "ご希望条件（エリア・面積・予算等）を詳しくお聞きします。" },
              { num: "03", title: "物件ご提案", desc: "条件マッチした物件を厳選し、詳細資料とともにご提案。" },
              { num: "04", title: "内見", desc: "気になる物件の内見をアレンジ。オンライン内見にも対応。" },
              { num: "05", title: "条件交渉・契約", desc: "フリーレント・敷金減額等の条件交渉をプロが代行。" },
              { num: "06", title: "移転・サポート", desc: "内装工事・引っ越し手配・届出までワンストップ対応。" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="glass rounded-xl p-5 text-center">
                  <span className="text-[#C5A572] text-2xl font-light">{s.num}</span>
                  <h3 className="text-sm font-medium mt-2">{s.title}</h3>
                  <p className="text-white/40 text-xs mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxImage>

      {/* ━━━ Case Studies ━━━ */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Case Study</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-4xl font-light mt-6">導入事例</h2>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { company: "ITスタートアップ A社", size: "従業員15名", before: "シェアオフィス 月額35万円", after: "専用オフィス30坪 月額28万円", result: "月額7万円コスト削減 + 専用空間確保" },
              { company: "税理士法人 B社", size: "従業員8名", before: "駅徒歩15分 築30年ビル", after: "駅徒歩3分 築5年ビル", result: "フリーレント3ヶ月獲得、実質初期費用40%削減" },
              { company: "デザイン会社 C社", size: "従業員5名", before: "物件探しに2ヶ月", after: "相談から2週間で契約完了", result: "居抜き物件で内装費用ゼロ" },
            ].map((c, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="glass rounded-2xl overflow-hidden luxury-card h-full">
                  <div className="bg-[#C5A572]/10 p-5">
                    <p className="text-[#C5A572] text-[10px] tracking-[0.2em]">CASE {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-medium mt-1">{c.company}</h3>
                    <p className="text-white/40 text-xs">{c.size}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <p className="text-white/30 text-[10px] tracking-wider">BEFORE</p>
                      <p className="text-white/60 text-sm">{c.before}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 border-t border-dashed border-white/10" />
                      <svg className="w-4 h-4 text-[#C5A572]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <div className="flex-1 border-t border-dashed border-white/10" />
                    </div>
                    <div>
                      <p className="text-[#C5A572] text-[10px] tracking-wider">AFTER</p>
                      <p className="text-white/90 text-sm font-medium">{c.after}</p>
                    </div>
                    <div className="mt-3 bg-white/5 rounded-lg p-3">
                      <p className="text-[#C5A572] text-xs font-medium">{c.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Stats ━━━ */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: 500, suffix: "+", label: "法人契約実績" },
              { num: 15, suffix: "年", label: "専門実績" },
              { num: 30, suffix: "%", label: "平均コスト削減" },
              { num: 2, suffix: "週間", label: "最短契約" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div>
                  <CountUp end={s.num} suffix={s.suffix} className="text-[#C5A572] text-3xl md:text-4xl font-light" />
                  <p className="text-white/30 text-xs tracking-wider mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">FAQ</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-3xl font-light mt-6">よくある質問</h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 space-y-3">
            {[
              { q: "最短でどのくらいの期間で移転できますか？", a: "最短2週間での契約・移転が可能です。即入居可能な物件や居抜き物件を中心にご提案いたします。" },
              { q: "フリーレント交渉は本当にできますか？", a: "はい。多くのケースでフリーレント1〜6ヶ月の獲得に成功しています。物件や時期により異なりますが、積極的に交渉いたします。" },
              { q: "仲介手数料はいくらですか？", a: "一般的にはご成約賃料の1ヶ月分（税別）です。物件によって異なる場合は事前にお見積もりをお出しします。" },
              { q: "SOHO利用可の物件はありますか？", a: "多数ご用意しています。マンションタイプのSOHO物件から住居兼オフィスまで幅広くご提案可能です。" },
              { q: "内装工事もお願いできますか？", a: "提携の内装会社をご紹介可能。レイアウト設計から施工までワンストップで対応いたします。" },
              { q: "小規模（1〜2名）でも対応してもらえますか？", a: "もちろんです。個人事業主・フリーランスの方のオフィス探しもしっかりサポートいたします。" },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <details className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-5">
                    <span className="font-medium text-sm md:text-base">{faq.q}</span>
                    <span className="faq-icon text-[#C5A572] transition-transform ml-3 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Contact CTA ━━━ */}
      <section id="contact" className="relative py-24 md:py-32">
        <img src={IMAGES.meeting} alt="Business meeting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Contact</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-4xl font-light mt-6 leading-relaxed">
                まずは無料でご相談ください
              </h2>
              <p className="mt-4 text-white/50 text-sm">最適なオフィスをご提案します。</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 glass rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1">会社名 <span className="text-[#C5A572]">*</span></label>
                    <input type="text" placeholder="株式会社○○" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C5A572]" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1">担当者名 <span className="text-[#C5A572]">*</span></label>
                    <input type="text" placeholder="山田 太郎" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C5A572]" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1">メールアドレス <span className="text-[#C5A572]">*</span></label>
                    <input type="email" placeholder="info@example.com" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C5A572]" />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1">電話番号 <span className="text-[#C5A572]">*</span></label>
                    <input type="tel" placeholder="03-0000-0000" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C5A572]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1">ご相談内容</label>
                  <textarea rows={3} placeholder="ご希望の条件やご質問をお書きください" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#C5A572] resize-none" />
                </div>
                <button className="btn-luxury w-full py-4 rounded-full text-sm tracking-wider">
                  無料で相談する
                </button>
                <p className="text-center text-white/20 text-xs">※ご相談・お見積りは無料です</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="mt-8 text-center">
              <p className="text-white/30 text-xs mb-2">お電話でのご相談</p>
              <a href="tel:0300000000" className="inline-flex items-center gap-2 text-[#C5A572] text-xl font-light hover:text-[#D4C5A0] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03-0000-0000
              </a>
              <p className="text-white/20 text-xs mt-1">受付 9:00〜18:00（土日祝休み）</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ Company ━━━ */}
      <section className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[#C5A572] text-xs tracking-[0.4em] uppercase">Company</p>
              <div className="luxury-divider" />
              <h2 className="text-2xl md:text-3xl font-light mt-6">会社概要</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 glass rounded-2xl p-6 md:p-8">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["会社名", "サンプル不動産株式会社"],
                    ["所在地", "東京都千代田区○○1-2-3 ○○ビル8F"],
                    ["代表者", "代表取締役 山田 太郎"],
                    ["設立", "2011年4月"],
                    ["資本金", "1,000万円"],
                    ["免許番号", "東京都知事 (3) 第○○○○○号"],
                    ["営業時間", "9:00〜18:00（土日祝休み）"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-white/5 last:border-0">
                      <th className="text-left text-white/40 font-normal py-3 pr-4 w-28 align-top">{label}</th>
                      <td className="text-white/80 py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="py-16 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-[#C5A572] rounded flex items-center justify-center">
              <svg className="w-3 h-3 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-sm tracking-[0.15em] font-light text-white/50">SAMPLE REALTY</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-white/30 text-xs">
            <a href="#" className="hover:text-[#C5A572] transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-[#C5A572] transition-colors">会社概要</a>
            <a href="#" className="hover:text-[#C5A572] transition-colors">特定商取引法に基づく表記</a>
          </div>
          <p className="mt-8 text-white/20 text-[10px] tracking-wider">&copy; 2026 SAMPLE REALTY. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ━━━ Floating CTA ━━━ */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden glass-dark p-3 z-50">
        <a href="#contact" className="btn-luxury w-full block text-center py-3.5 rounded-full text-sm tracking-wider">
          無料で相談する
        </a>
      </div>
    </div>
  );
}
