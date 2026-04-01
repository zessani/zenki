import { Product, ProductCategory } from "@/types/product";

export const products: Product[] = [
  {
    id: "engine-flush-pro",
    slug: "engine-flush-pro",
    name: "Engine Flush Pro",
    tagline: "Deep-clean your engine before every oil change",
    description:
      "Solvent-based engine oil additive. Dissolves sludge, varnish, and carbon deposits from oil passages and galleries. Add to engine oil before draining. Works with petrol and diesel engines. Safe on seals and gaskets.",
    usage: [
      "Add the full contents to engine oil before draining",
      "Start the engine and idle for 10 to 15 minutes",
      "Drain the old oil and replace the oil filter",
      "Fill with fresh engine oil",
    ],
    category: "Engine Care",
    image: "/products/engine-flush-pro.jpg",
    featured: true,
    benefits: [
      "Removes sludge and varnish deposits",
      "Restores oil flow and circulation",
      "Compatible with petrol and diesel engines",
      "Safe for seals and gaskets",
    ],
    variants: ["500ml"],
  },
  {
    id: "engine-oil-treatment",
    slug: "engine-oil-treatment",
    name: "Engine Oil Treatment",
    tagline: "Reduce friction and protect engine components",
    description:
      "Anti-wear oil additive. Bonds to metal surfaces and reduces friction between moving parts. Lowers operating temperature and engine noise. Add at every oil change. Use approximately 10% of total oil capacity.",
    usage: [
      "Add to engine oil at every oil change or as needed",
      "Use 10% of total oil capacity (500ml for 5L oil)",
      "Run engine for 5 minutes to circulate",
    ],
    category: "Engine Care",
    image: "/products/engine-oil-treatment.jpg",
    featured: false,
    benefits: [
      "Reduces engine friction and wear",
      "Lowers engine noise",
      "Improves fuel efficiency",
      "Extends oil life",
    ],
    variants: ["500ml", "1L"],
  },
  {
    id: "radiator-coolant",
    slug: "radiator-coolant",
    name: "Radiator Coolant",
    tagline: "Concentrated long-life coolant for petrol and diesel engines",
    description:
      "Concentrated long-life coolant. Mix 50:50 with distilled water before use. Protects against overheating, corrosion, and scale buildup in the cooling system. Service life up to 2 years. Compatible with all metals.",
    usage: [
      "Mix 50:50 with distilled water before use",
      "Flush old coolant from the system before adding",
      "Fill to the maximum mark on the coolant reservoir",
      "Check concentration annually with a refractometer",
    ],
    category: "Cooling System",
    image: "/products/radiator-coolant.jpg",
    featured: true,
    benefits: [
      "Prevents overheating",
      "Protects against corrosion and scale",
      "Service life up to 2 years",
      "Compatible with all metals",
    ],
    variants: ["1L", "4L"],
  },
  {
    id: "radiator-flush",
    slug: "radiator-flush",
    name: "Radiator Flush",
    tagline: "Flush out rust and scale from your cooling system",
    description:
      "Flushing agent for vehicle cooling systems. Removes rust, scale, and residual coolant from radiator passages. Use before refilling with fresh coolant to prevent blockages and restore flow.",
    usage: [
      "Add to cooling system when engine is cold",
      "Run engine for 10 minutes at operating temperature",
      "Drain completely and flush with clean water",
      "Refill with Zenki Radiator Coolant",
    ],
    category: "Cooling System",
    image: "/products/radiator-flush.jpg",
    featured: false,
    benefits: [
      "Removes rust and scale buildup",
      "Restores cooling efficiency",
      "Prevents overheating",
      "Safe for all metals and hoses",
    ],
    variants: ["500ml"],
  },
  {
    id: "fuel-system-cleaner",
    slug: "fuel-system-cleaner",
    name: "Fuel System Cleaner",
    tagline: "Restore lost power and improve fuel economy",
    description:
      "Fuel additive for injector and carburettor cleaning. Removes carbon deposits from injectors, intake valves, and fuel lines in a single treatment. Add to fuel tank before filling. Use every 5,000 to 10,000 km for best results.",
    usage: [
      "Add to fuel tank before filling",
      "Best used with a nearly empty tank",
      "Fill tank with fuel and drive normally",
      "Use every 5,000 to 10,000 km",
    ],
    category: "Fuel System",
    image: "/products/fuel-system-cleaner.jpg",
    featured: true,
    benefits: [
      "Cleans fuel injectors and carburettors",
      "Restores power and acceleration",
      "Improves fuel economy",
      "Reduces exhaust emissions",
    ],
    variants: ["250ml", "500ml"],
  },
  {
    id: "octane-booster",
    slug: "octane-booster",
    name: "Octane Booster",
    tagline: "Raises octane rating. Eliminates engine knock.",
    description:
      "Fuel additive that raises octane rating in petrol engines. Eliminates knock and ping. One bottle treats up to 60 litres of fuel. Safe for catalytic converters and oxygen sensors.",
    usage: [
      "Add to fuel tank before filling",
      "One bottle treats up to 60 litres of fuel",
      "Safe for catalytic converters and oxygen sensors",
    ],
    category: "Fuel System",
    image: "/products/octane-booster.jpg",
    featured: false,
    benefits: [
      "Raises octane rating",
      "Eliminates engine knock and ping",
      "Increases power output",
      "Safe for all fuel systems",
    ],
    variants: ["250ml"],
  },
  {
    id: "car-shampoo",
    slug: "car-shampoo",
    name: "Car Wash Shampoo",
    tagline: "Streak-free clean with a lasting shine",
    description:
      "pH-balanced car wash concentrate. Dilute 30ml per bucket of water. Removes dirt and road film without stripping wax or sealant protection. Safe on all paint types including metallic and matte.",
    usage: [
      "Dilute 30ml per bucket of water",
      "Apply with a soft wash mitt or sponge",
      "Rinse thoroughly with clean water",
      "Dry with a microfibre cloth",
    ],
    category: "Exterior Care",
    image: "/products/car-shampoo.jpg",
    featured: false,
    benefits: [
      "pH-balanced, safe on all paint types",
      "Does not strip wax or sealant",
      "Leaves a glossy, streak-free finish",
    ],
    variants: ["500ml", "1L"],
  },
  {
    id: "car-wax-polish",
    slug: "car-wax-polish",
    name: "Car Wax & Polish",
    tagline: "Deep shine and lasting paint protection",
    description:
      "Two-in-one polishing compound and carnauba wax. Removes light scratches and swirl marks. Carnauba wax layer provides UV protection and water beading. Apply by hand or machine applicator.",
    usage: [
      "Apply to clean, dry paintwork",
      "Work in small sections using a foam applicator",
      "Allow to haze, approximately 5 minutes",
      "Buff off with a clean microfibre cloth",
    ],
    category: "Exterior Care",
    image: "/products/car-wax-polish.jpg",
    featured: true,
    benefits: [
      "Removes light scratches and swirl marks",
      "Carnauba wax protection",
      "UV protection prevents paint fade",
      "Water-beading effect",
    ],
    variants: ["300ml", "500ml"],
  },
  {
    id: "tyre-shine",
    slug: "tyre-shine",
    name: "Tyre Shine Spray",
    tagline: "Restores gloss on tyre sidewalls",
    description:
      "Silicone-based tyre dressing spray. Restores gloss on tyre sidewalls. Conditions rubber and slows UV degradation. Apply to clean, dry tyres and allow 2 minutes to dry before driving.",
    usage: [
      "Clean tyres before application",
      "Spray evenly onto tyre sidewall",
      "Spread with a foam applicator for even coverage",
      "Allow 2 minutes to dry before driving",
    ],
    category: "Tire & Wheel",
    image: "/products/tyre-shine.jpg",
    featured: false,
    benefits: [
      "Restores deep gloss on sidewalls",
      "Conditions rubber and prevents cracking",
      "UV protection against fading",
    ],
    variants: ["400ml aerosol"],
  },
  {
    id: "wheel-cleaner",
    slug: "wheel-cleaner",
    name: "Wheel & Rim Cleaner",
    tagline: "Removes brake dust and road grime. Acid-free.",
    description:
      "Acid-free wheel cleaning spray. Dissolves brake dust, road tar, and grime on contact. Safe for alloy, steel, chrome, painted, and lacquered wheel finishes. Spray on, agitate if needed, rinse off.",
    usage: [
      "Spray onto dry or wet wheel surface",
      "Allow 2 to 3 minutes to react",
      "Agitate with a wheel brush if needed",
      "Rinse thoroughly with water",
    ],
    category: "Tire & Wheel",
    image: "/products/wheel-cleaner.jpg",
    featured: false,
    benefits: [
      "Acid-free, safe for all wheel types",
      "Dissolves brake dust on contact",
      "Removes road tar and grime",
    ],
    variants: ["500ml"],
  },
  {
    id: "dashboard-polish",
    slug: "dashboard-polish",
    name: "Dashboard Polish & Protector",
    tagline: "Clean, condition, and protect interior plastics",
    description:
      "Interior surface cleaner and conditioner. Cleans and protects plastic, vinyl, and rubber surfaces. Leaves a matte, non-greasy finish. UV protection slows fading and cracking. Do not apply on steering wheel or pedals.",
    usage: [
      "Spray directly onto surface or onto an applicator",
      "Spread evenly with a foam applicator or cloth",
      "Buff lightly with a dry cloth",
      "Do not apply on steering wheel or pedals",
    ],
    category: "Interior Care",
    image: "/products/dashboard-polish.jpg",
    featured: false,
    benefits: [
      "Cleans and conditions plastics and vinyl",
      "UV protection prevents fading and cracking",
      "Non-greasy matte finish",
    ],
    variants: ["400ml aerosol", "250ml spray"],
  },
  {
    id: "leather-conditioner",
    slug: "leather-conditioner",
    name: "Leather Conditioner",
    tagline: "Conditions and protects leather seating",
    description:
      "Leather care conditioner for vehicle interiors. Softens leather and reduces cracking. Forms a protective barrier against stains and UV damage. Apply to clean leather with a cloth and buff off excess.",
    usage: [
      "Clean leather surface before application",
      "Apply a small amount to a microfibre cloth",
      "Work into leather in circular motions",
      "Allow to absorb for 10 minutes, buff off excess",
    ],
    category: "Interior Care",
    image: "/products/leather-conditioner.jpg",
    featured: false,
    benefits: [
      "Conditions and softens leather",
      "Prevents cracking and fading",
      "Stain-resistant protection",
    ],
    variants: ["250ml"],
  },
  {
    id: "multi-purpose-lubricant",
    slug: "multi-purpose-lubricant",
    name: "Multi-Purpose Lubricant",
    tagline: "Lubricate, protect, and penetrate rusted parts",
    description:
      "Multi-purpose penetrating lubricant spray. Loosens rusted and seized parts. Displaces moisture from electrical contacts and metal surfaces. Lubricates hinges, cables, and linkages. Protects against corrosion.",
    usage: [
      "Spray directly onto the area to be treated",
      "For rusted parts: spray and wait 5 minutes before loosening",
      "For lubrication: apply and wipe off excess",
      "For moisture displacement: spray and leave",
    ],
    category: "Lubricants",
    image: "/products/multi-purpose-lubricant.jpg",
    featured: false,
    benefits: [
      "Loosens rusted and seized parts",
      "Displaces moisture and prevents rust",
      "Lubricates hinges, cables, and moving parts",
    ],
    variants: ["400ml aerosol"],
  },
  {
    id: "chain-lubricant",
    slug: "chain-lubricant",
    name: "Chain & Cable Lubricant",
    tagline: "Reduce chain wear and extend drive chain life",
    description:
      "Sticky chain lubricant for motorcycle and bicycle drive chains. Clings through water and dust. Also suitable for brake and throttle cables. Apply to each link with wheel rotating, wipe off excess from tyre and rim.",
    usage: [
      "Clean chain with a degreaser before applying",
      "Apply to each link of the chain while rotating the wheel",
      "Allow to penetrate for 5 minutes",
      "Wipe off any excess from tyre or rim",
    ],
    category: "Lubricants",
    image: "/products/chain-lubricant.jpg",
    featured: false,
    benefits: [
      "Reduces chain wear and friction",
      "Clings in wet and dusty conditions",
      "Suitable for all drive chains and cables",
    ],
    variants: ["400ml aerosol", "100ml spray"],
  },
  {
    id: "air-freshener-new-car",
    slug: "air-freshener-new-car",
    name: "Car Air Freshener",
    tagline: "Slow-release odour neutraliser. Up to 60 days.",
    description:
      "Slow-release car air freshener. Neutralises odours rather than masking them. Lasts up to 60 days. Adjustable vent opening controls scent intensity. Available in New Car, Oud, and Ocean.",
    usage: [
      "Hang from rear-view mirror or place under seat",
      "Adjust the vent opening to control fragrance intensity",
      "Replace when fragrance diminishes",
    ],
    category: "Air Care",
    image: "/products/air-freshener-new-car.jpg",
    featured: false,
    benefits: [
      "Lasts up to 60 days",
      "Neutralises odours at source",
      "Adjustable fragrance intensity",
    ],
    variants: ["New Car", "Oud", "Ocean"],
  },
  {
    id: "mould-release-z4d",
    slug: "mould-release-z4d",
    name: "Z-4D Mould Release",
    tagline: "Aerosol release agent for clean demoulding",
    description:
      "PCSIR-certified aerosol mould release agent. For fibreglass, rubber, and composite moulds. Apply 3 to 4 coats to new or porous moulds. Clean, residue-free release. Extends mould service life.",
    usage: [
      "Clean mould surface thoroughly before use",
      "Apply a thin, even coat from 25 to 30cm distance",
      "Allow to dry for 1 to 2 minutes",
      "Apply 3 to 4 coats for new or porous moulds",
    ],
    category: "Exterior Care",
    image: "/products/mould-release-z4d.jpg",
    featured: false,
    benefits: [
      "PCSIR-certified formula",
      "Clean release with no residue transfer",
      "Suitable for fibreglass, rubber, and composites",
      "Extends mould service life",
    ],
    variants: ["400ml aerosol"],
  },
  {
    id: "brake-cleaner",
    slug: "brake-cleaner",
    name: "Brake & Parts Cleaner",
    tagline: "Fast-drying, residue-free brake system cleaning",
    description:
      "Fast-evaporating solvent spray for brake and drivetrain components. Removes brake fluid, grease, and oil contamination. Zero residue after evaporation. Safe on most metals and plastics. Highly flammable — keep away from open flames.",
    usage: [
      "Spray onto brake discs, pads, or parts to be cleaned",
      "Allow 30 to 60 seconds to evaporate completely",
      "Wipe off loosened contaminants if needed",
      "Keep away from open flames. Highly flammable.",
    ],
    category: "Engine Care",
    image: "/products/brake-cleaner.jpg",
    featured: false,
    benefits: [
      "Fast-evaporating with zero residue",
      "Removes grease, oil, and brake fluid",
      "Safe on metals and most plastics",
      "Restores braking performance",
    ],
    variants: ["500ml aerosol"],
  },
];

export const categories: ProductCategory[] = [
  "Engine Care",
  "Cooling System",
  "Fuel System",
  "Exterior Care",
  "Interior Care",
  "Tire & Wheel",
  "Lubricants",
  "Air Care",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).slice(0, 4);
}

export function getProductsByCategory(cat: string): Product[] {
  if (cat === "All") return products;
  return products.filter((p) => p.category === cat);
}
