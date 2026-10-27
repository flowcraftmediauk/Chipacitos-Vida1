import { Product, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: "Chipacitos Vida",
  tagline: "El sabor de lo hecho con cariño",
  locationName: "Cercanías Escuela Provincial de Teatro “Tito Guerra”",
  city: "San Salvador de Jujuy, Jujuy, Argentina",
  googleMapsUrl: "https://maps.app.goo.gl/SjUP9KAgPNtc84496?g_st=ac",
  // In this client proposal, WhatsApp number is configurable. We provide a demo simulator so the owner can test ordering flow.
  whatsappNumber: "", // Empty by default per instructions; user can configure or click to trigger interactive inquiry modal
  verifiedStatus: "Concepto de menú representativo para propuesta de diseño web.",
};

export const PRODUCTS: Product[] = [
  {
    id: "chipas-clasicos",
    name: "Chipacitos Clásicos Tradicionales",
    category: "chipas",
    categoryLabel: "Especialidad de la casa",
    shortDescription: "Bocados dorados de puro queso y almidón de mandioca, tiernos y aireados por dentro.",
    fullDescription: "Elaborados siguiendo la tradición criolla con una cuidada combinación de quesos estacionados y masa liviana. Recién horneados son el acompañamiento predilecto para el mate de la mañana o la tarde jujeña.",
    image: "/src/assets/images/product_chipa_clasico_1793084497246.jpg",
    features: ["Crocante exterior", "Masa aireada", "Intenso sabor a queso"],
    suggestedPairing: "Ideal para la ronda de mates o café recién filtrado",
    formatNotice: "Presentación sugerida: por docena o peso a convenir",
  },
  {
    id: "chipas-rellenos",
    name: "Chipá Relleno con Corazón Fundido",
    category: "rellenos",
    categoryLabel: "Opción gourmet",
    shortDescription: "Textura exterior crocante con generoso corazón fundido de queso y jamón cocido seleccionado.",
    fullDescription: "Una versión irresistible para quienes buscan una experiencia aún más sabrosa. Al morderlo, el calor funde el relleno creando un contraste perfecto con la corteza dorada.",
    image: "/src/assets/images/product_chipa_relleno_1793084497800.jpg",
    features: ["Queso fundido", "Corteza dorada", "Para servir bien caliente"],
    suggestedPairing: "Perfecto para una merienda completa o aperitivo",
    formatNotice: "Presentación sugerida: por media docena o unidad",
  },
  {
    id: "chipas-hierbas",
    name: "Chipacitos Gratinados con Finas Hierbas",
    category: "chipas",
    categoryLabel: "Variedad especial",
    shortDescription: "Costra tostada al horno con un toque de hierbas aromáticas y gratén de queso reggianito.",
    fullDescription: "Nuestra variante aromática añade hierbas seleccionadas y una costra dorada extra crocante. El tostado de queso superficial desprende un aroma inconfundible ni bien sale del horno.",
    image: "/src/assets/images/chipa_herbs_close_up_1793084531522.jpg",
    features: ["Gratén crocante", "Toque aromático", "Blend de quesos"],
    suggestedPairing: "Excelente para tablas de picadas y reuniones familiares",
    formatNotice: "Presentación sugerida: por docena",
  },
  {
    id: "medialunas-manteca",
    name: "Medialunas Artesanales de Manteca",
    category: "dulces",
    categoryLabel: "Panadería dulce",
    shortDescription: "Hojaldre liviano, esponjoso y delicadamente almibarado para endulzar el encuentro.",
    fullDescription: "Panificados dulces horneados con dedicación. Su hojaldrado suave y brillo almibarado las convierten en el bocado favorito para los desayunos y meriendas tradicionales.",
    image: "/src/assets/images/product_medialunas_pastry_1793084498778.jpg",
    features: ["Hojaldre mantecoso", "Brillo de almíbar", "Masa liviana"],
    suggestedPairing: "Inseparables del café con leche o un té caliente",
    formatNotice: "Presentación sugerida: por docena o media docena",
  },
  {
    id: "alfajores-maicena",
    name: "Alfajorcitos de Maicena Tradicionales",
    category: "dulces",
    categoryLabel: "Dulce casero",
    shortDescription: "Masa suave que se deshace en la boca, dulce de leche generoso y lluvia de coco rallado.",
    fullDescription: "El clásico argentino infaltable en toda reunión. Masa fina y quebradiza con el balance justo de dulzor para disfrutar a toda hora.",
    image: "/src/assets/images/product_pasteleria_alfajores_1793084556077.jpg",
    features: ["Relleno generoso", "Coco fresco", "Textura suave"],
    suggestedPairing: "Ideales para regalar o acompañar la sobremesa",
    formatNotice: "Presentación sugerida: cajita surtida o por media docena",
  },
  {
    id: "chipas-platter-compartir",
    name: "Bandeja Selección para Compartir",
    category: "chipas",
    categoryLabel: "Para encuentros",
    shortDescription: "Surtido variado recién salido del horno, pensado para grupos, oficinas y festejos.",
    fullDescription: "Una combinación pensada para que todos encuentren su bocado predilecto. Se entrega en bandeja protectora lista para poner en la mesa y compartir momentos inolvidables.",
    image: "/src/assets/images/hero_chipacitos_platter_1793084496201.jpg",
    features: ["Variedad surtida", "Listo para la mesa", "Siempre calentitos"],
    suggestedPairing: "La elección recomendada para cumpleaños y juntadas de amigos",
    formatNotice: "Presentación sugerida: bandejeado especial por encargo",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué son los chipacitos y cómo los preparan?",
    answer: "Los chipacitos son pequeños panecillos tradicionales elaborados a base de almidón de mandioca y una selección de quesos. Al hornearse, logran una costra exterior dorada y crocante con un interior suave, elástico y sumamente sabroso.",
  },
  {
    id: "faq-2",
    question: "¿Cómo puedo consultar los productos disponibles y hacer un pedido?",
    answer: "Podés contactarte directamente a través de WhatsApp o consultar la disponibilidad del día. Al no requerir pasarelas complejas, el trato es directo, ágil y personalizado para asegurar que retires tus panificados recién horneados.",
  },
  {
    id: "faq-3",
    question: "¿Dónde están ubicados en San Salvador de Jujuy?",
    answer: "Estamos ubicados en las cercanías de la Escuela Provincial de Teatro “Tito Guerra” en San Salvador de Jujuy. Podés abrir el mapa directo desde el botón 'Cómo llegar' para calcular tu recorrido fácilmente.",
  },
  {
    id: "faq-4",
    question: "¿Cuáles son los horarios de atención y días de horneado?",
    answer: "Te invitamos a consultar el perfil actualizado en Google Maps o escribirnos por WhatsApp antes de pasar para confirmar los turnos de horneado y asegurar que tus chipacitos estén bien calentitos.",
  },
  {
    id: "faq-5",
    question: "¿Tienen opciones para eventos, reuniones familiares u oficinas?",
    answer: "¡Sí! Preparamos bandejas surtidas y pedidos especiales para reuniones de trabajo, eventos familiares o meriendas escolares con reserva previa para coordinar la entrega en el horario que precises.",
  },
];
