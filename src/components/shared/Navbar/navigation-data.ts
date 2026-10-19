export type MegaItem = {
  label: string;
  href: string;
};

export type MegaGroup = {
  title: string;
  items: MegaItem[];
};

export type NavItem = {
  label: string;
  href: string;
  groups: MegaGroup[];
  featured: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

export const navItems: NavItem[] = [
  {
    label: "DTF & Transfers",
    href: "/products/dtf-transfer",
    groups: [
      {
        title: "DTF Transfers",
        items: [
          { label: "DTF Transfers By Size", href: "/product/dtf-size" },
          { label: "Build a Gang Sheet", href: "/product/dtf-gang-sheet" },
          { label: "Upload a Gang Sheet", href: "/product/dtf-upload" },
          { label: "DTF Sample Pack", href: "/product/dtf-sample-pack" },
        ],
      },
    ],
    featured: {
      eyebrow: "PRINT TRANSFERS",
      title: "Fast, vibrant transfers for merch and hard surfaces.",
      description: "DTF and UV DTF solutions for production-ready printing.",
      href: "/products/dtf-transfer",
      cta: "Shop transfers",
    },
  },
  {
    label: "UV DTF",
    href: "/products/uv-dtf-transfer",
    groups: [
      {
        title: "UV DTF Transfers",
        items: [
          {
            label: "UV DTF Build a Gang Sheet",
            href: "/product/uv-dtf-gang-sheet",
          },
          {
            label: "UV DTF Upload Gang Sheets",
            href: "/product/uv-dtf-upload",
          },
          { label: "UV DTF Transfer By Size", href: "/product/uv-dtf-size" },
          { label: "Packaging Transfers", href: "/product/uv-dtf-sample-pack" },
        ],
      },
    ],
    featured: {
      eyebrow: "UV DTF",
      title: "Durable transfers for cups, packaging, and more.",
      description:
        "Add vibrant, long-lasting designs to hard surfaces with UV DTF transfers.",
      href: "/products",
      cta: "Shop UV DTF",
    },
  },
  {
    label: "Business Cards",
    href: "/products/business-cards",
    groups: [
      {
        title: "Business Cards",
        items: [
          {
            label: "Standard Business Cards",
            href: "/products/business-cards",
          },
          { label: "Premium Business Cards", href: "/products/business-cards" },
          { label: "Rounded Corner Cards", href: "/products/business-cards" },
          { label: "Square Business Cards", href: "/products/business-cards" },
        ],
      },
      {
        title: "Business Essentials",
        items: [
          { label: "Postcards", href: "/products/postcards" },
          { label: "Letterheads", href: "/products" },
          { label: "Envelopes", href: "/products/envelopes" },
          { label: "Presentation Folders", href: "/products/folders" },
        ],
      },
      {
        title: "Popular Finishes",
        items: [
          { label: "Matte Finish", href: "/products/business-cards" },
          { label: "Gloss Finish", href: "/products/business-cards" },
          { label: "Soft Touch", href: "/products/business-cards" },
          { label: "Premium Paper", href: "/products/business-cards" },
        ],
      },
    ],
    featured: {
      eyebrow: "FEATURED",
      title: "Make every first impression count.",
      description:
        "Premium stocks, finishes and sizes designed around your brand.",
      href: "/products/business-cards",
      cta: "Shop business cards",
    },
  },
  {
    label: "Marketing Materials",
    href: "/products/marketing-materials",
    groups: [
      {
        title: "Marketing Print",
        items: [
          { label: "Flyers", href: "/products/flyers" },
          { label: "Brochures", href: "/products/marketing-materials" },
          { label: "Booklets", href: "/products/marketing-materials" },
          { label: "Menus", href: "/products" },
        ],
      },
      {
        title: "Promotional",
        items: [
          { label: "Posters", href: "/products" },
          { label: "Magnets", href: "/products" },
          { label: "Promo Gift Sets", href: "/products/gift-sets" },
          { label: "Custom Notebooks", href: "/products/notebooks" },
        ],
      },
      {
        title: "Events",
        items: [
          { label: "Event Flyers", href: "/products/flyers" },
          { label: "Table Displays", href: "/products/signs-banners" },
          { label: "Posters", href: "/products" },
          { label: "Handouts", href: "/products/marketing-materials" },
        ],
      },
    ],
    featured: {
      eyebrow: "POPULAR",
      title: "Turn campaigns into something people keep.",
      description:
        "Print materials for launches, stores, events and everyday marketing.",
      href: "/products/marketing-materials",
      cta: "Explore marketing",
    },
  },
  {
    label: "Signs & Banners",
    href: "/products/signs-banners",
    groups: [
      {
        title: "Banners",
        items: [
          { label: "Vinyl Banners", href: "/products/signs-banners" },
          { label: "Roll-Up Banners", href: "/products/roll-up-banners" },
          { label: "Event Banners", href: "/products/banners" },
          { label: "Mesh Banners", href: "/products/signs-banners" },
        ],
      },
      {
        title: "Signs & Displays",
        items: [
          { label: "Yard Signs", href: "/products/signs-banners" },
          { label: "Window Decals", href: "/products/window-decals" },
          { label: "Foam Boards", href: "/products/signs-banners" },
          { label: "Event Displays", href: "/products/signs-banners" },
        ],
      },
      {
        title: "Large Format",
        items: [
          { label: "Storefront Graphics", href: "/products/signs-banners" },
          { label: "Wall Graphics", href: "/products/signs-banners" },
          { label: "Directional Signs", href: "/products/signs-banners" },
          { label: "Trade Show Displays", href: "/products/signs-banners" },
        ],
      },
    ],
    featured: {
      eyebrow: "LARGE FORMAT",
      title: "Get seen from across the room.",
      description:
        "Bold signs and banners for storefronts, launches and events.",
      href: "/products/signs-banners",
      cta: "Explore signs",
    },
  },
  {
    label: "Apparel",
    href: "/products/apparel",
    groups: [
      {
        title: "Clothing",
        items: [
          { label: "T-Shirts", href: "/products/tshirts" },
          { label: "Hoodies", href: "/products/hoodies" },
          { label: "Polos", href: "/products/apparel" },
          { label: "Workwear", href: "/products/apparel" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "Caps", href: "/products/apparel" },
          { label: "Tote Bags", href: "/products/tote-bags" },
          { label: "Aprons", href: "/products/apparel" },
          { label: "Team Apparel", href: "/products/apparel" },
        ],
      },
      {
        title: "Print Methods",
        items: [
          { label: "DTF Printed Apparel", href: "/products/dtf-transfer" },
          { label: "Logo Apparel", href: "/products/apparel" },
          { label: "Team Orders", href: "/products/apparel" },
          { label: "Bulk Apparel", href: "/products/apparel" },
        ],
      },
    ],
    featured: {
      eyebrow: "CUSTOM APPAREL",
      title: "Wear your brand everywhere.",
      description: "Custom clothing for teams, brands and communities.",
      href: "/products/apparel",
      cta: "Shop apparel",
    },
  },
  {
    label: "Stickers & Labels",
    href: "/products/stickers-labels",
    groups: [
      {
        title: "Stickers",
        items: [
          { label: "Custom Stickers", href: "/products/stickers" },
          { label: "Vinyl Stickers", href: "/products/vinyl-stickers" },
          { label: "Logo Stickers", href: "/products/stickers" },
          { label: "Window Decals", href: "/products/window-decals" },
        ],
      },
      {
        title: "Labels",
        items: [
          { label: "Product Labels", href: "/products/stickers-labels" },
          { label: "Roll Labels", href: "/products/labels" },
          { label: "Packaging Labels", href: "/products/labels" },
          { label: "Bottle Labels", href: "/products/labels" },
        ],
      },
      {
        title: "Specialty",
        items: [
          { label: "UV DTF Stickers", href: "/products" },
          { label: "Clear Stickers", href: "/products/stickers" },
          { label: "Waterproof Labels", href: "/products/labels" },
          { label: "Custom Decals", href: "/products/stickers-labels" },
        ],
      },
    ],
    featured: {
      eyebrow: "BRAND EVERYTHING",
      title: "Small format. Big brand impact.",
      description: "Durable stickers and labels for products and packaging.",
      href: "/products/stickers-labels",
      cta: "Shop stickers",
    },
  },
  {
    label: "Packaging",
    href: "/products/packaging",
    groups: [
      {
        title: "Boxes",
        items: [
          { label: "Product Boxes", href: "/products/packaging" },
          { label: "Mailer Boxes", href: "/products/packaging" },
          { label: "Shipping Boxes", href: "/products/packaging" },
        ],
      },
      {
        title: "Bags & Wrap",
        items: [
          { label: "Paper Bags", href: "/products/paper-bags" },
          { label: "Tissue Paper", href: "/products/packaging" },
          { label: "Packaging Tape", href: "/products/packaging" },
        ],
      },
      {
        title: "Finishing",
        items: [
          { label: "Product Labels", href: "/products/stickers-labels" },
          { label: "Thank You Cards", href: "/products/thank-you-cards" },
          { label: "Packaging Stickers", href: "/products/stickers" },
          { label: "Custom Inserts", href: "/products/packaging" },
        ],
      },
    ],
    featured: {
      eyebrow: "PACKAGING",
      title: "Unboxing should feel like your brand.",
      description: "Boxes, bags and finishing details for every order.",
      href: "/products/packaging",
      cta: "Explore packaging",
    },
  },
  {
    label: "Design Templates",
    href: "/templates",
    groups: [
      {
        title: "Templates",
        items: [
          { label: "Business Card Templates", href: "/templates" },
          { label: "Flyer Templates", href: "/templates" },
          { label: "Poster Templates", href: "/templates" },
          { label: "Banner Templates", href: "/templates" },
        ],
      },
      {
        title: "Design Tools",
        items: [
          { label: "Create a Design", href: "/editor" },
          { label: "Upload Your Design", href: "/editor" },
          { label: "Start from Scratch", href: "/editor" },
          { label: "AI Design Studio", href: "/editor" },
        ],
      },
      {
        title: "Get Inspired",
        items: [
          { label: "Business Templates", href: "/templates" },
          { label: "Event Templates", href: "/templates" },
          { label: "Packaging Ideas", href: "/templates" },
          { label: "Apparel Designs", href: "/templates" },
        ],
      },
    ],
    featured: {
      eyebrow: "AI + DESIGN",
      title: "Create something unique for your business.",
      description:
        "Start with a template or use AI to move from idea to print-ready design.",
      href: "/editor",
      cta: "Start designing",
    },
  },
];
