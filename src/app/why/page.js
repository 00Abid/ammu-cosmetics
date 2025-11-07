const page = () => {

  const faqs = [
    {
      "title": "What makes skincare truly 'luxury'?",
      "description": "Luxury skincare combines premium natural ingredients, meticulous sourcing, advanced formulation, effective results, elegant packaging, and a sensory experience that elevates your daily routine into self-care ritual."
    },
    {
      "title": "Where do you source your natural ingredients?",
      "description": "Our ingredients are sourced from the world's finest suppliers including organic farms, sustainable plantations, and ethical cultivators who share our commitment to quality, purity, and environmental responsibility."
    },
    {
      "title": "Are natural luxury products safe for sensitive skin?",
      "description": "Yes, natural luxury products are often gentler and safer for sensitive skin because they avoid harsh synthetic chemicals, parabens, and artificial fragrances that cause irritation. However, do a patch test first."
    },
    {
      "title": "Why is natural luxury skincare more expensive?",
      "description": "Premium pricing reflects ethical sourcing, meticulous ingredient selection, advanced formulation science, rigorous testing, luxury packaging, and sustainability investments—all ensuring superior quality and efficacy."
    },
    {
      "title": "What are the best natural luxury ingredients?",
      "description": "Top natural luxury ingredients include rare plant extracts, botanicals like rose and chamomile, plant oils, peptides, vitamin C from natural sources, hyaluronic acid from fermentation, and exotic minerals like multani mitti."
    },
    {
      "title": "Do natural luxury products really work or are they just marketing?",
      "description": "Quality natural luxury products deliver real results backed by science. Premium botanicals, concentrated actives, and careful formulation ensure effectiveness comparable to synthetic alternatives without harsh chemicals."
    },
    {
      "title": "Can I use natural luxury skincare with prescription treatments?",
      "description": "Generally yes, but consult your dermatologist first. Natural luxury products usually have gentle formulations that complement medical treatments, though some ingredients may interact with specific medications."
    },
    {
      "title": "How long do natural luxury products stay fresh?",
      "description": "Quality natural luxury products use stable preservative systems and antioxidants. Most have 12-24 months shelf life unopened, 6-12 months after opening. Check PAO (Period After Opening) symbol on packaging."
    },
    {
      "title": "What's the difference between natural and luxury skincare?",
      "description": "Natural = sourced from plants without synthetic chemicals. Luxury = premium quality, meticulous sourcing, advanced science, elegant packaging, brand heritage. Natural luxury combines both for superior experience and results."
    },
    {
      "title": "Are natural luxury ingredients scientifically proven?",
      "description": "Yes, many natural ingredients have clinical studies supporting efficacy: retinol from plants, vitamin C from kakadu plum, hyaluronic acid from fermentation, niacinamide, plant peptides, and botanical extracts."
    }
    ,
    {
      "title": "What does 'ethically made' mean for cosmetics?",
      "description": "Ethically made cosmetics are produced with fair labor practices, safe working conditions, transparent supply chains, respect for workers' rights, fair wages, no animal testing, and no involvement with exploited communities."
    },
    {
      "title": "How can I verify if a beauty brand is truly ethical?",
      "description": "Look for certifications: Leaping Bunny (cruelty-free), B Corp certified, Fair Trade, PETA approved. Check brand transparency, supply chain disclosure, sustainability reports, and third-party audits on their website."
    },
    {
      "title": "What's the difference between cruelty-free and ethical?",
      "description": "Cruelty-free = no animal testing. Ethical = cruelty-free PLUS fair labor practices, sustainable sourcing, transparent supply chain, community support, and environmental responsibility throughout production."
    },
    {
      "title": "Are ethical beauty products also vegan?",
      "description": "Not necessarily. Ethical products may use ethically-sourced animal ingredients (halal-slaughtered, from well-treated animals). Vegan means no animal products at all. Many ethical brands are both vegan and ethical."
    },
    {
      "title": "Why do ethical beauty products cost more?",
      "description": "Higher costs reflect fair wages for workers, ethical sourcing premiums, transparent supply chains, rigorous auditing, third-party certifications, sustainable practices, and commitment to community development."
    },
    {
      "title": "How do ethical brands source their ingredients?",
      "description": "They work directly with farmers and suppliers, ensure fair prices above market rate, provide safe working conditions, support community development, audit facilities regularly, and maintain transparency throughout supply chain."
    },
    {
      "title": "Can ethical beauty products be luxury?",
      "description": "Absolutely. Ethical luxury combines premium natural ingredients, meticulous sourcing, advanced formulation, effective results, elegant packaging, AND ethical production ensuring cruelty-free, fair, sustainable practices."
    },
    {
      "title": "What ingredients should ethical beauty avoid?",
      "description": "Avoid products with pork-derived ingredients (if Islamic standards), animal-tested ingredients, minerals from unethical mining, ingredients linked to child labor, non-fair-trade sourced items, and products from brands with poor labor records."
    },
    {
      "title": "Are ethical beauty brands committed to halal standards?",
      "description": "Many ethical beauty brands prioritize halal certification as part of their ethical commitment, ensuring no prohibited ingredients, cruelty-free practices, and transparency aligning with Islamic values."
    },
    {
      "title": "How do I build an ethical beauty routine?",
      "description": "Research brand certifications and transparency, start with essentials (cleanser, moisturizer, sunscreen), choose multi-purpose products to reduce waste, support small ethical brands, and align purchases with your values."
    }
    ,
    {
      "title": "What makes cosmetics sustainable?",
      "description": "Sustainable cosmetics use renewable ingredients, minimize water and energy use, employ eco-friendly manufacturing, feature recyclable/biodegradable packaging, reduce carbon footprint, and support environmental conservation."
    },
    {
      "title": "What's the difference between sustainable and eco-friendly?",
      "description": "Eco-friendly = less harmful to environment. Sustainable = meets current needs without depleting resources for future generations, including social responsibility, ethical practices, and long-term environmental impact."
    },
    {
      "title": "Why choose sustainable luxury cosmetics?",
      "description": "Protects environment and biodiversity, reduces pollution and waste, supports ethical practices, often gentler on skin, premium quality, aligns personal values with purchasing, and contributes to positive global change."
    },
    {
      "title": "What sustainable packaging options exist for cosmetics?",
      "description": "Recyclable glass and aluminum, biodegradable materials, reusable containers, compostable packaging, refillable formats, minimalist design reducing waste, and innovative bio-based plastics (PLA, mycelium leather)."
    },
    {
      "title": "Are sustainable luxury products as effective as conventional?",
      "description": "Yes, sustainable luxury products use premium natural ingredients and advanced formulation science delivering equal or superior results. They avoid harmful chemicals while maintaining high performance standards."
    },
    {
      "title": "How do sustainable brands reduce their carbon footprint?",
      "description": "Through renewable energy in manufacturing, local sourcing reducing transportation, waterless formulations, carbon-neutral shipping, renewable ingredients, ethical forestry, and carbon offset programs."
    },
    {
      "title": "What certifications indicate truly sustainable cosmetics?",
      "description": "Look for: COSMOS Organic, Fair Trade, RSPO (sustainable palm oil), Cradle to Cradle, Carbon Trust, B Corp, EWG Verified, Leaping Bunny, and third-party environmental certifications."
    },
    {
      "title": "Can sustainable luxury cosmetics use multani mitti?",
      "description": "Yes, multani mitti is naturally sustainable—mined responsibly from earth, biodegradable, requires minimal processing, reduces need for synthetic alternatives, and supports traditional mining communities when sourced ethically."
    },
    {
      "title": "How do I know if packaging is truly recyclable or biodegradable?",
      "description": "Check for certification marks, material codes (1-7 on plastics), brand transparency on end-of-life disposal, third-party testing, and local recycling guidelines. Don't rely on marketing claims alone."
    },
    {
      "title": "What's the environmental impact of sustainable vs. conventional cosmetics?",
      "description": "Sustainable: lower water use, less pollution, biodegradable ingredients, recyclable packaging, reduced waste. Conventional: higher water consumption, chemical pollution, plastic waste, microplastics, and lasting environmental damage."
    }
    ,
    {
      "title": "Is multani mitti a luxury ingredient?",
      "description": "Yes, multani mitti is considered luxury in skincare because it's rare, ancient, naturally sourced, highly effective, requires ethical mining, and offers premium results rivaling expensive synthetic alternatives."
    },
    {
      "title": "What makes multani mitti sustainable?",
      "description": "Multani mitti is naturally sustainable: mined from Earth without synthetic processing, biodegradable, requires minimal packaging, reduces need for chemicals, supports traditional communities, and has zero environmental footprint after use."
    },
    {
      "title": "Can multani mitti be part of an ethical beauty routine?",
      "description": "Yes, when sourced ethically from fair-trade suppliers ensuring miners' welfare, sustainable mining practices, transparent supply chains, community support, and natural processing without harmful chemicals."
    },
    {
      "title": "How is luxury multani mitti different from regular multani mitti?",
      "description": "Luxury multani mitti features: superior purity and mineral content, ethical sourcing, premium packaging, tested potency, precise grinding, quality certifications, and careful storage ensuring optimal freshness and efficacy."
    },
    {
      "title": "Is multani mitti halal and ethical?",
      "description": "Yes, multani mitti is naturally halal (mineral, non-animal source) and ethical when sourced from responsible suppliers. Many halal beauty brands use it as core ingredient in ethical formulations."
    },
    {
      "title": "Can multani mitti be combined with luxury natural ingredients?",
      "description": "Absolutely. Combine multani mitti with rose water, honey, aloe vera, neem oil, turmeric, argan oil, or vitamin C for enhanced luxury formulations addressing specific skin concerns with premium results."
    },
    {
      "title": "How to identify high-quality luxury multani mitti?",
      "description": "Look for: fine texture (not gritty), pure white/cream color, ethical sourcing certification, small-batch production, proper storage, transparent supplier information, and positive customer reviews from dermatologists."
    },
    {
      "title": "What makes multani mitti luxury skincare staple?",
      "description": "Ancient wisdom combined with science, universally effective across skin types, powerful yet gentle, naturally sustainable, mineral-rich composition, quick visible results, and cost-effective luxury ingredient."
    },
    {
      "title": "Can luxury multani mitti replace expensive facials?",
      "description": "Yes, quality multani mitti face packs deliver professional-grade deep cleansing, pore refinement, and rejuvenation comparable to facials at fraction of cost, making luxury skincare accessible."
    },
    {
      "title": "How to incorporate multani mitti in luxury skincare routine?",
      "description": "Use 1-2 times weekly: mix premium multani mitti with rose water, honey, or specialty oils; apply for 15 minutes; rinse gently; follow with luxury serums and moisturizers for complete premium routine."
    },
    {
      "title": "Can halal cosmetics be luxury products?",
      "description": "Yes, halal luxury cosmetics combine premium ingredients, ethical sourcing, advanced formulation science, elegant packaging, and certified halal standards ensuring both luxury experience and Islamic compliance."
    },
    {
      "title": "What makes halal cosmetics luxury skincare?",
      "description": "Luxury halal cosmetics feature: premium natural ingredients from ethical sources, sophisticated formulations, meticulous sourcing, cruelty-free practices, sustainable packaging, effective results, and halal certification."
    },
    {
      "title": "Are halal cosmetics more expensive than conventional?",
      "description": "Premium halal cosmetics may cost more due to certification, ethical sourcing, superior ingredients, and rigorous testing. However, many halal brands offer competitive pricing across luxury and accessible ranges."
    },
    {
      "title": "Can halal cosmetics contain luxury ingredients like retinol?",
      "description": "Yes, halal cosmetics can use plant-derived retinol, vitamin C from natural sources, hyaluronic acid, peptides, and other premium actives—all formulated to meet halal standards without animal testing."
    },
    {
      "title": "How is halal certification different from cruelty-free?",
      "description": "Halal certification verifies Islamic compliance of ingredients and processes. Cruelty-free means no animal testing. Many halal products are both halal and cruelty-free, though not all cruelty-free products are halal."
    },
    {
      "title": "Are all luxury natural cosmetics halal?",
      "description": "Not necessarily. Natural cosmetics may contain alcohol, animal-derived ingredients, or untested items. True luxury halal cosmetics explicitly certify halal status and transparency across entire supply chain."
    },
    {
      "title": "Can multani mitti be part of halal luxury skincare?",
      "description": "Yes, multani mitti is naturally halal and perfect for luxury halal skincare. When ethically sourced and combined with halal-certified premium ingredients, it creates premium halal formulations."
    },
    {
      "title": "What brands offer halal luxury cosmetics?",
      "description": "Multiple luxury brands now offer halal-certified collections. Look for halal certification logos, JAKIM (Malaysia), Halal Foundation certifications, and brands explicitly marketing halal luxury skincare."
    },
    {
      "title": "How to verify halal certification on luxury cosmetics?",
      "description": "Check packaging for halal certification marks, verify on official halal certification databases, review brand's halal certification documentation on website, and ensure third-party certification from recognized authorities."
    },
    {
      "title": "Can I build a luxury halal skincare routine?",
      "description": "Yes, select halal-certified cleanser, toner, serum, moisturizer, and sunscreen. Add multani mitti face packs, rose water, and specialty treatments. Ensure all products carry visible halal certification."
    },
    {
      "title": "Why is multani mitti considered sustainable?",
      "description": "Multani mitti is naturally sustainable: renewable mineral resource, biodegradable, minimal processing required, no synthetic chemicals, reduces need for chemical alternatives, ethical mining supports communities, and zero landfill waste."
    },
    {
      "title": "How is ethical multani mitti sourced?",
      "description": "Ethical sourcing ensures: fair wages for miners, safe working conditions, minimal environmental impact from mining, community development support, transparent supply chains, and sustainable extraction practices."
    },
    {
      "title": "What makes multani mitti packaging sustainable?",
      "description": "Premium sustainable multani mitti uses minimal packaging: recyclable glass or paper, biodegradable materials, no plastic, eco-friendly printing, and compact design reducing transportation carbon footprint."
    },
    {
      "title": "Can multani mitti replace chemical exfoliants sustainably?",
      "description": "Yes, multani mitti is sustainable alternative to microbeads and chemical exfoliants. It's natural, biodegradable, effective, requires minimal processing, and reduces plastic waste and ocean pollution."
    },
    {
      "title": "How do sustainable multani mitti brands operate?",
      "description": "They source from ethical suppliers, minimize water use, employ renewable energy, reduce carbon emissions, use sustainable packaging, support mining communities, and maintain transparent, auditable supply chains."
    },
    {
      "title": "Is multani mitti eco-friendly compared to other clays?",
      "description": "Yes, multani mitti is highly eco-friendly: naturally abundant, requires minimal extraction, biodegradable, effective at low concentrations reducing waste, and sustainable when ethically sourced from responsible operators."
    },
    {
      "title": "What's the environmental cost of mining multani mitti?",
      "description": "Responsible multani mitti mining has minimal impact: surface extraction, quick land reclamation, supports local ecosystems when managed properly. However, irresponsible mining can damage soil and displace communities—verify ethical sourcing."
    },
    {
      "title": "How to identify sustainably-sourced multani mitti?",
      "description": "Look for: Fair Trade certification, ethical sourcing certification, transparent supplier information, community development programs, minimal processing, sustainable packaging, and positive environmental audit reports."
    },
    {
      "title": "Can multani mitti reduce cosmetics industry waste?",
      "description": "Yes, multani mitti reduces waste through: biodegradable formulations, minimal packaging requirements, natural ingredient requiring little processing, reusable containers, and serving as alternative to synthetic product waste."
    },
    {
      "title": "How does sustainable multani mitti support communities?",
      "description": "Ethical multani mitti sourcing provides: fair employment, skills development, infrastructure investment, women's empowerment in mining communities, education support, healthcare access, and economic stability for generations."
    },
    {
      "title": "How to start a luxury beauty product line?",
      "description": "Define your niche (natural, halal, sustainable), source premium ingredients, develop formulations with cosmetologists, obtain necessary certifications, design luxury packaging, conduct safety testing, and establish transparent supply chain."
    },
    {
      "title": "What certifications do luxury beauty products need?",
      "description": "Depends on market and claims: FDA registration, dermatologist testing, cruelty-free certification, halal certification, organic certification, Fair Trade, sustainability certifications, and compliance with local regulations."
    },
    {
      "title": "How to ensure luxury beauty products are safe?",
      "description": "Conduct patch tests, stability testing, microbiological testing, dermatological testing, toxicology studies, use approved preservatives, document all ingredients, maintain quality control, and follow Good Manufacturing Practices (GMP)."
    },
    {
      "title": "What makes a beauty product premium vs. drugstore?",
      "description": "Premium: superior ingredients, meticulous formulation, ethical sourcing, luxury packaging, clinical testing, effective results, brand heritage, and customer service. Drugstore focuses on accessibility and value."
    },
    {
      "title": "How do luxury brands maintain sustainability?",
      "description": "Through renewable ingredients, eco-friendly manufacturing, sustainable packaging, carbon-neutral operations, waste reduction, community support, transparent reporting, and continuous innovation in sustainable practices."
    },
    {
      "title": "What's the role of storytelling in luxury beauty?",
      "description": "Storytelling creates emotional connection, communicates brand values, justifies premium pricing, builds trust, differentiates from competitors, engages customers, and creates brand loyalty through meaningful narratives."
    },
    {
      "title": "How important is packaging for luxury beauty products?",
      "description": "Very important. Luxury packaging conveys quality, creates unboxing experience, protects product integrity, ensures shelf appeal, communicates brand values, and influences purchasing decisions of premium consumers."
    },
    {
      "title": "Can luxury beauty brands be affordable?",
      "description": "Yes, some luxury brands offer accessible pricing through direct-to-consumer models, smart sourcing, efficient manufacturing. However, true luxury typically reflects fair pricing for premium quality and ethical practices."
    },
    {
      "title": "How do luxury beauty brands build customer loyalty?",
      "description": "Through superior products, exceptional service, brand community, loyalty programs, exclusive access, personalization, transparency, and alignment with customer values in sustainability, ethics, and innovation."
    },
    {
      "title": "What trends define luxury beauty in 2025?",
      "description": "Personalization, clean beauty, sustainability, ethical sourcing, halal certification, wellness integration, technological innovation, diversity and inclusion, transparency, and multi-sensory experiences."
    },
    {
      "title": "What is Multani Mitti?",
      "description": "Multani Mitti (Fuller's Earth) is a natural clay mineral from Rajasthan rich in magnesium, silica, and calcium, used for deep cleansing skin and hair by absorbing excess oil and impurities."
    },
    {
      "title": "Is Multani Mitti organic or herbal?",
      "description": "Multani Mitti is a natural mineral product that comes from the earth, not an organic or herbal product as it doesn't grow on plants or trees."
    },
    {
      "title": "What are the benefits of Multani Mitti for face?",
      "description": "Deep cleanses skin, absorbs excess oil, treats acne and pimples, fades dark spots and pigmentation, reduces tan, tightens pores, provides anti-aging benefits, improves blood circulation, and gives natural glow."
    },
    {
      "title": "How to use Multani Mitti for face?",
      "description": "Mix 1-2 tablespoons of Multani Mitti with rose water (for oily skin) or milk/honey (for dry skin) to form a smooth paste. Apply evenly on face and neck, let it dry for 10-20 minutes, then rinse with lukewarm water."
    },
    {
      "title": "How often should I use Multani Mitti?",
      "description": "Use Multani Mitti face pack 1-2 times per week for best results. Daily use can cause excessive dryness, especially for sensitive or dry skin types."
    },
    {
      "title": "Can I use Multani Mitti every day?",
      "description": "Not recommended. Limit use to 1-2 times per week to avoid over-drying the skin. Daily use may strip natural oils and cause irritation."
    },
    {
      "title": "Is Multani Mitti good for oily skin?",
      "description": "Yes, excellent for oily skin. It absorbs excess sebum, unclogs pores, controls oil production, and mattifies skin naturally."
    },
    {
      "title": "Does Multani Mitti help with acne?",
      "description": "Yes, Multani Mitti treats acne by removing impurities, absorbing excess oil, eliminating blackheads and whiteheads, shrinking pores, cooling skin, and reducing inflammation."
    },
    {
      "title": "Can Multani Mitti lighten skin or reduce dark spots?",
      "description": "Yes, it helps even skin tone, tackles tanning and pigmentation, fights dark circles and sun damage due to its cooling effect, and promotes natural glow by removing dead skin cells."
    },
    {
      "title": "How to use Multani Mitti for skin whitening?",
      "description": "Mix Multani Mitti with lemon juice and rose water. Apply for 15 minutes and rinse. For sensitive skin, mix with honey instead of lemon."
    },
    {
      "title": "Can dry skin use Multani Mitti?",
      "description": "Yes, but only if mixed with moisturizing agents like honey, milk, or curd. Use sparingly to avoid excessive dryness."
    },
    {
      "title": "Is Multani Mitti safe for sensitive skin?",
      "description": "Do a patch test first. Its strong oil-absorbing nature may irritate sensitive skin. Mix with soothing ingredients like rose water or honey."
    },
    {
      "title": "Does Multani Mitti help with hair?",
      "description": "Yes, it absorbs excess oil from scalp, strengthens hair follicles, prevents dandruff, promotes healthy hair growth, and adds shine to hair."
    },
    {
      "title": "Can I use Multani Mitti for hair daily?",
      "description": "Not recommended for daily use. If you have very dry scalp, regular use may make it too dry. Use 1-2 times per week."
    },
    {
      "title": "What are the side effects of Multani Mitti?",
      "description": "Overuse can cause excessive dryness, skin irritation, and allergic reactions in sensitive individuals. Always do a patch test and avoid broken or irritated skin."
    },
    {
      "title": "How long does Multani Mitti take to show results?",
      "description": "Immediate results for cleansing and oil control. For acne, dark spots, and pigmentation, visible results appear within 2-4 weeks of consistent use."
    },
    {
      "title": "Best Multani Mitti face pack combinations?",
      "description": "Rose water (oily skin), milk and honey (dry skin), lemon juice (brightening), turmeric and milk (anti-acne), yogurt (soothing), neem oil and turmeric (acne-prone)."
    },
    {
      "title": "Does Multani Mitti tighten skin?",
      "description": "Yes, it helps tighten and firm skin, reduces pore size, creates youthful appearance, and works best on mature skin fighting sagging."
    },
    {
      "title": "Can Multani Mitti remove tan?",
      "description": "Yes, it effectively removes sun tan, tackles pigmentation, and gives even skin tone through regular application."
    },
    {
      "title": "What should I avoid when using Multani Mitti?",
      "description": "Don't apply on broken or irritated skin, don't let it dry completely (may crack), don't overuse, don't use hot water to remove, and avoid if you have very sensitive skin without patch testing."
    },
    {
      "title": "What are Halal cosmetics?",
      "description": "Halal cosmetics are beauty products formulated, manufactured, packaged, and distributed according to Islamic law, free from prohibited (haram) ingredients and ethical in production."
    },
    {
      "title": "What makes cosmetics Halal?",
      "description": "Products must be free from pork derivatives, alcohol (ethanol), blood, non-halal animal derivatives, GMOs, and manufactured in clean facilities preventing cross-contamination with non-halal substances."
    },
    {
      "title": "What ingredients are haram in cosmetics?",
      "description": "Pork and its derivatives, ethyl alcohol, blood, human body parts, predatory animals, reptiles, insects, wine, non-halal slaughtered animals, and genetically modified organisms (GMOs)."
    },
    {
      "title": "Are Halal cosmetics the same as vegan?",
      "description": "No. Halal cosmetics may contain animal products or animal-derived ingredients as long as they come from halal-slaughtered animals according to Islamic Shariah law."
    },
    {
      "title": "Are Halal cosmetics cruelty-free?",
      "description": "Yes, Halal cosmetics are cruelty-free and only use vegan and cruelty-free ingredients. No animals are harmed during testing of halal cosmetics."
    },
    {
      "title": "What is Halal certification for cosmetics?",
      "description": "Independent assessment verifying product compliance with international halal standards, examining ingredients, manufacturing processes, packaging, storage, and distribution for halal compliance."
    },
    {
      "title": "How to get Halal certification for cosmetics?",
      "description": "Submit application with ingredient lists and production details, undergo facility audit, provide halal certificates for all raw materials, implement SOPs for halal compliance, and maintain ongoing surveillance."
    },
    {
      "title": "Is alcohol allowed in Halal cosmetics?",
      "description": "Ethanol and intoxicating alcohols are not permitted. However, cetyl alcohol and other fatty alcohols (non-drinkable, solid raw materials) are considered halal."
    },
    {
      "title": "Benefits of Halal cosmetics?",
      "description": "Free from harmful ingredients, hypoallergenic and non-irritating, safe for sensitive skin, environmentally friendly, ethically produced, cruelty-free, and suitable for all consumers seeking clean beauty."
    },
    {
      "title": "Do cosmetics need to be Halal?",
      "description": "For Muslims, yes. Since cosmetics are absorbed by skin or may enter the body (like lipstick), they should be halal to ensure purity and avoid doubt."
    },
    {
      "title": "How to know if cosmetics are Halal?",
      "description": "Check for halal certification logo on packaging, read ingredient list to avoid alcohol, carmine, pig-derived gelatin, and other haram substances. Trusted halal brands clearly display certification."
    },
    {
      "title": "What is the benefit of Halal certificate?",
      "description": "Proves product follows Islamic law, gives Muslim consumers confidence in ingredients, manufacturing process, and packaging being halal and contamination-free, and builds brand trust globally."
    },
    {
      "title": "Are Halal cosmetics good for skin?",
      "description": "Yes, often contain natural ingredients, free from harsh chemicals, alcohol-free (ideal for sensitive skin), hypoallergenic, and manufactured with high purity standards."
    },
    {
      "title": "Can non-Muslims use Halal cosmetics?",
      "description": "Absolutely. Halal cosmetics are perceived as high-quality, organic, vegan, ethical, and cruelty-free products suitable for all consumers seeking clean beauty."
    },
    {
      "title": "What is halal gelatin in cosmetics?",
      "description": "Gelatin made from animals slaughtered according to Islamic law, safe for Muslims to use, free from impurities, and considered more ethical and trustworthy."
    },
    {
      "title": "Are Halal cosmetics more expensive?",
      "description": "Not necessarily. Prices vary by brand and quality. Growing demand has made halal cosmetics more accessible and competitively priced."
    },
    {
      "title": "What is halal lipstick?",
      "description": "Lipstick free from pig fat (lard/tallow), alcohol, and prohibited pigments like carmine. Contains natural oils, butters, and mineral pigments."
    },
    {
      "title": "Are Halal cosmetics organic?",
      "description": "Not always, but many halal cosmetics use natural, organic ingredients and environmentally responsible sourcing to minimize environmental impact."
    },
    {
      "title": "What is halal nail polish?",
      "description": "Water-permeable (breathable) nail polish allowing water to reach nails for Islamic ablution (wudu), free from alcohol and haram ingredients."
    },
    {
      "title": "Why choose Halal cosmetics?",
      "description": "Religious compliance for Muslims, clean and ethical beauty, free from harmful chemicals, cruelty-free, environmentally friendly, suitable for sensitive skin, and high purity standards."
    },
    {
      "title": "What is a basic skincare routine?",
      "description": "Gentle cleanser (morning and night), hydrating moisturizer, broad-spectrum SPF 30+ sunscreen (morning), and optional serum for specific concerns."
    },
    {
      "title": "How do I know my skin type?",
      "description": "Normal (balanced), Oily (excess sebum and shine), Dry (tightness, flaking), Combination (oily in T-zone, dry elsewhere), Sensitive (easily irritated or reactive)."
    },
    {
      "title": "Do I need sunscreen every day?",
      "description": "Yes, absolutely. Daily sunscreen prevents premature aging, sun damage, dark spots, and skin cancer. Apply SPF 30+ broad-spectrum sunscreen 20 minutes before sun exposure."
    },
    {
      "title": "How long to see results from skincare products?",
      "description": "Cleansers and masks give instant results. Serums, anti-aging products, and acne treatments take 4-8 weeks (one full skin renewal cycle) for visible results."
    },
    {
      "title": "Can I use skincare products while pregnant?",
      "description": "Many are safe, but avoid retinols, benzoyl peroxide, salicylic acid, and hydroquinone. Consult your doctor before using new products during pregnancy."
    },
    {
      "title": "What are hypoallergenic cosmetics?",
      "description": "Products formulated to minimize risk of allergic reactions, free from common allergens and irritants, suitable for sensitive skin. Do patch tests to confirm suitability."
    },
    {
      "title": "How to treat acne with cosmetics?",
      "description": "Use products with salicylic acid or benzoyl peroxide, gentle non-comedogenic cleanser, oil-free moisturizer, and consult dermatologist for personalized treatment."
    },
    {
      "title": "How to prevent premature aging?",
      "description": "Daily sunscreen (SPF 30+), products with antioxidants and retinoids, gentle cleansing, hydrating moisturizer, healthy lifestyle, and limit sun exposure."
    },
    {
      "title": "What causes dark spots and how to treat them?",
      "description": "Caused by UV exposure and hormonal changes. Prevent with sunscreen. Treat with exfoliation, Vitamin C, Niacinamide, and prescription dark spot correctors."
    },
    {
      "title": "Do I need eye cream?",
      "description": "If concerned with puffiness, dark circles, or crow's feet, yes. Eye creams are formulated specifically for delicate eye area with lighter texture."
    },
    {
      "title": "What is the shelf life of cosmetics?",
      "description": "Varies by product. Check PAO (Period After Opening) symbol on packaging. Generally: mascara 3-6 months, foundation 6-12 months, powders 2 years, skincare 6-12 months."
    },
    {
      "title": "Should I use toner?",
      "description": "Yes, toner balances pH, removes remaining impurities after cleansing, prepares skin for serums and moisturizers, and can provide hydration or oil control."
    },
    {
      "title": "What is the difference between serum and moisturizer?",
      "description": "Serums are concentrated treatments targeting specific concerns (vitamin C, hyaluronic acid, retinol). Moisturizers hydrate and seal in moisture with thicker texture."
    },
    {
      "title": "Can I layer multiple serums?",
      "description": "Yes, apply separately with 2-5 minute intervals. For sensitive skin, don't use vitamin C and niacinamide together. Use vitamin C morning, niacinamide night."
    },
    {
      "title": "What are parabens and are they safe?",
      "description": "Parabens are preservatives used in cosmetics to prevent bacterial growth. FDA considers them safe at low levels, but some prefer paraben-free products."
    },
    {
      "title": "What does cruelty-free mean?",
      "description": "Products not tested on animals at any stage of development. Look for Leaping Bunny, PETA, or Choose Cruelty Free certification logos."
    },
    {
      "title": "What are natural cosmetics?",
      "description": "Products formulated with plant-derived ingredients, minimal synthetic chemicals, and environmentally responsible sourcing. May be certified organic."
    },
    {
      "title": "How to choose products for oily skin?",
      "description": "Oil-free moisturizers, gel-based cleansers, non-comedogenic products, salicylic acid for acne control, and mattifying sunscreen."
    },
    {
      "title": "How to choose products for dry skin?",
      "description": "Rich, creamy moisturizers, oil-based or balm cleansers, hydrating serums with hyaluronic acid, and nourishing ingredients like ceramides and glycerin."
    },
    {
      "title": "What is double cleansing?",
      "description": "Two-step cleansing: first with oil-based cleanser to remove makeup and sebum, then gentle foam cleanser to clean pores. Ideal for oily and acne-prone skin."
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.title,
      acceptedAnswer: { '@type': 'Answer', text: f.description }
    }))
  };
  return (
    <div className="min-h-screen pt-16 bg-[#F8F5F1]">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.2em] mb-4 text-stone-500" >Why Choose</p>
          <h1 className="mb-6 font-serif text-4xl md:text-5xl">AMMU COSMETICS</h1>
          <p className="max-w-2xl mx-auto text-lg font-light text-stone-600">
            Each product is crafted with precision and care, combining nature finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-500 transform bg-white card-hover hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-2 font-serif text-2xl">{faq.title}</h3>
              <p className="mb-6 font-light text-stone-600">{faq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page

export const metadata = {
  title: 'Why AMMU COSMETICS — Natural Luxury Skincare',
  description: 'FAQs and reasons to choose AMMU COSMETICS — ethical, natural, and luxury skincare.',
  openGraph: {
    title: 'Why AMMU COSMETICS — Natural Luxury Skincare',
    description: 'FAQs and reasons to choose AMMU COSMETICS — ethical, natural, and luxury skincare.',
    url: '/why',
    images: [{ url: '/og.webp', width: 1200, height: 630 }]
  },
  alternates: { canonical: '/why' }
};
