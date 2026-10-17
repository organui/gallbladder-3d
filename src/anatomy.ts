export type Structure = {
  id: string
  fma: string
  name: string
  sourceName: string
  group: 'Gallbladder' | 'Bile ducts' | 'Neighbouring organs' | 'Vessels'
  // Official 4.3 IS-A concepts this group draws its source meshes from.
  concepts: string[]
  // FJ element files; each element belongs to exactly one structure.
  elements: string[]
  color: string
  description: string
  note: string
  // Large context organs are drawn translucent until selected, so the
  // gallbladder and ducts inside or behind them stay visible.
  context?: boolean
}

export const anatomySource = 'https://www.training.seer.cancer.gov/biliary/anatomy'
export const structures: Structure[] = [
  {
    id: 'gallbladder',
    fma: 'FMA7202',
    name: 'Gallbladder',
    sourceName: 'gallbladder',
    group: 'Gallbladder',
    concepts: ['FMA7202'],
    elements: ['FJ2817'],
    color: '#6f9a4f',
    description:
      'A pear-shaped sac on the underside of the liver. It stores and concentrates bile between meals and squeezes it out after eating.',
    note: 'The fundus, body and neck are one mesh, so they cannot be selected on their own.',
  },
  {
    id: 'cystic-duct',
    fma: 'FMA14539',
    name: 'Cystic duct',
    sourceName: 'cystic duct',
    group: 'Bile ducts',
    concepts: ['FMA14539'],
    elements: ['FJ3080'],
    color: '#9fb35a',
    description:
      'A short duct from the neck of the gallbladder. Bile flows in through it to be stored and back out when the gallbladder contracts.',
    note: 'Its spiral folds are not modelled. It joins the common hepatic duct to form the common bile duct.',
  },
  {
    id: 'common-hepatic-duct',
    fma: 'FMA14668',
    name: 'Common hepatic duct',
    sourceName: 'common hepatic duct',
    group: 'Bile ducts',
    concepts: ['FMA14668'],
    elements: ['FJ3079'],
    color: '#c2ad55',
    description:
      'Formed where the right and left hepatic ducts meet. It carries bile from the liver down toward the duodenum.',
    note: 'The source has no separate common bile duct. This mesh continues down past the cystic duct toward the pancreas and duodenum, along the course the common bile duct takes.',
  },
  {
    id: 'right-hepatic-duct',
    fma: 'FMA14669',
    name: 'Right hepatic duct',
    sourceName: 'right hepatic duct',
    group: 'Bile ducts',
    concepts: ['FMA14669'],
    elements: ['FJ3123'],
    color: '#d6c06a',
    description: 'Drains bile from the right part of the liver. It is short in this model.',
    note: 'Best seen with the liver hidden or with the duct selected.',
  },
  {
    id: 'left-hepatic-duct',
    fma: 'FMA14670',
    name: 'Left hepatic duct',
    sourceName: 'left hepatic duct',
    group: 'Bile ducts',
    concepts: ['FMA14670'],
    elements: ['FJ3096'],
    color: '#b89b45',
    description:
      'Drains bile from the left part of the liver and runs across to meet the right hepatic duct.',
    note: 'Best seen with the liver hidden or with the duct selected.',
  },
  {
    id: 'intrahepatic-ducts',
    fma: 'FMA71891',
    name: 'Intrahepatic bile ducts',
    sourceName: 'tributaries of the right and left hepatic biliary trees',
    group: 'Bile ducts',
    concepts: [
      'FMA71867',
      'FMA71868',
      'FMA71869',
      'FMA71870',
      'FMA71885',
      'FMA71886',
      'FMA71887',
      'FMA71888',
      'FMA71889',
    ],
    elements: [
      'FJ3071',
      'FJ3072',
      'FJ3109',
      'FJ3110',
      'FJ3108',
      'FJ3104',
      'FJ3105',
      'FJ3103',
      'FJ3088',
      'FJ3090',
      'FJ3089',
      'FJ1883',
    ],
    color: '#dccf8e',
    description:
      'Branches inside the liver that collect bile from its segments and lead to the right and left hepatic ducts.',
    note: 'Nine source tributaries are grouped as one selectable set. Fine branches are simplified.',
  },
  {
    id: 'pancreatic-duct',
    fma: 'FMA63103',
    name: 'Pancreatic duct',
    sourceName: 'pancreatic duct tree',
    group: 'Bile ducts',
    concepts: ['FMA63103'],
    elements: ['FJ1896'],
    color: '#7d9a5e',
    description:
      'Runs the length of the pancreas. It usually joins the common bile duct just before both open into the duodenum.',
    note: 'Included to show where bile and pancreatic juice meet. It runs inside the pancreas.',
  },
  {
    id: 'liver',
    fma: 'FMA7197',
    name: 'Liver',
    sourceName: 'caudate lobe and hepatovenous segments II to VIII',
    group: 'Neighbouring organs',
    concepts: ['FMA13365', 'FMA15739', 'FMA15741', 'FMA15742', 'FMA15743', 'FMA15744', 'FMA15746'],
    elements: ['FJ2816', 'FJ2818', 'FJ2819', 'FJ2820', 'FJ2821', 'FJ2822', 'FJ2823', 'FJ2824'],
    color: '#a55e4e',
    description:
      'Makes bile and drains it through the hepatic ducts. The gallbladder lies in a shallow fossa on its underside.',
    note: 'Drawn translucent so the ducts inside it stay visible; select it to see it solid. Its segments are one selectable surface here.',
    context: true,
  },
  {
    id: 'duodenum',
    fma: 'FMA7206',
    name: 'Duodenum',
    sourceName: 'duodenum',
    group: 'Neighbouring organs',
    concepts: ['FMA7206'],
    elements: ['FJ2573'],
    color: '#c99089',
    description:
      'The first part of the small intestine. Bile and pancreatic juice enter it through the major duodenal papilla.',
    note: 'Included for orientation. The stomach and the rest of the intestine are omitted.',
  },
  {
    id: 'pancreas',
    fma: 'FMA63120',
    name: 'Pancreas',
    sourceName: 'parenchyma of pancreas',
    group: 'Neighbouring organs',
    concepts: ['FMA63120'],
    elements: ['FJ1895'],
    color: '#dcb67e',
    description:
      'A gland behind the stomach. The lower common bile duct passes through or behind its head.',
    note: 'Included for orientation. Drawn translucent so the bile duct and pancreatic duct stay visible; select it to see it solid.',
    context: true,
  },
  {
    id: 'portal-vein',
    fma: 'FMA71904',
    name: 'Portal vein',
    sourceName: 'pre-hepatic portal vein',
    group: 'Vessels',
    concepts: ['FMA71904'],
    elements: ['FJ3082'],
    color: '#5f7fa6',
    description:
      'Carries blood from the gut and spleen to the liver. It runs behind the bile duct and the hepatic artery.',
    note: 'Only the segment before the liver is included; its branches are shown in the liver explorer.',
  },
  {
    id: 'common-hepatic-artery',
    fma: 'FMA76536',
    name: 'Common hepatic artery',
    sourceName: 'trunk of common hepatic artery',
    group: 'Vessels',
    concepts: ['FMA76536'],
    elements: ['FJ3078'],
    color: '#b8564c',
    description:
      'Runs from the celiac trunk toward the liver and continues as the hepatic artery proper.',
    note: 'Only the trunk is included.',
  },
  {
    id: 'hepatic-artery-proper',
    fma: 'FMA76548',
    name: 'Hepatic artery proper',
    sourceName: 'trunk of hepatic artery proper',
    group: 'Vessels',
    concepts: ['FMA76548'],
    elements: ['FJ3081'],
    color: '#c9725f',
    description:
      'Climbs beside the bile duct toward the liver and divides into the right and left hepatic arteries.',
    note: 'Only the trunk is included.',
  },
  {
    id: 'right-hepatic-artery',
    fma: 'FMA70456',
    name: 'Right hepatic artery',
    sourceName: 'trunk of right hepatic artery',
    group: 'Vessels',
    concepts: ['FMA70456'],
    elements: ['FJ3117'],
    color: '#d0836c',
    description:
      'Supplies the right part of the liver. The cystic artery to the gallbladder usually arises from it.',
    note: 'The source has no cystic artery mesh, so it is not shown.',
  },
  {
    id: 'left-hepatic-artery',
    fma: 'FMA70457',
    name: 'Left hepatic artery',
    sourceName: 'trunk of left hepatic artery',
    group: 'Vessels',
    concepts: ['FMA70457'],
    elements: ['FJ3095'],
    color: '#de9878',
    description: 'Supplies the left part of the liver.',
    note: 'Only the trunk is included.',
  },
]
export const groups = ['Gallbladder', 'Bile ducts', 'Neighbouring organs', 'Vessels'] as const
export const byId = Object.fromEntries(structures.map((s) => [s.id, s]))
export type View = 'Anterior' | 'Posterior' | 'Inferior'
export const tour: { id: string; title: string; text: string; view: View; isolate?: boolean }[] = [
  {
    id: 'gallbladder',
    title: 'Under the liver',
    text: 'The gallbladder sits in a shallow hollow on the underside of the liver. From below, its rounded fundus points forward toward the front of the abdomen.',
    view: 'Inferior',
  },
  {
    id: 'cystic-duct',
    title: 'In and out',
    text: 'The cystic duct leaves the neck of the gallbladder. Bile flows in through it to be stored and back out when the gallbladder contracts.',
    view: 'Anterior',
  },
  {
    id: 'intrahepatic-ducts',
    title: 'Where bile starts',
    text: 'Bile is made in the liver and collected by branching ducts inside it. They lead to the right and left hepatic ducts, which join below the liver.',
    view: 'Anterior',
  },
  {
    id: 'common-hepatic-duct',
    title: 'Down to the gut',
    text: 'The common hepatic duct is isolated here. Below the cystic duct it continues as the common bile duct, down behind the duodenum. Restore all to see its neighbours.',
    view: 'Anterior',
    isolate: true,
  },
  {
    id: 'pancreatic-duct',
    title: 'A shared exit',
    text: 'Near the duodenum the bile duct usually meets the pancreatic duct, and both drain through the same opening into the small intestine.',
    view: 'Anterior',
  },
  {
    id: 'portal-vein',
    title: 'Behind the duct',
    text: 'Turn to the back to find the portal vein behind the bile duct, with the hepatic artery climbing beside them toward the liver.',
    view: 'Posterior',
  },
]

export type Emphasis = 'normal' | 'context' | 'selected' | 'ghosted'
// With nothing selected every structure keeps its own color, and context
// organs are translucent. A selection keeps its structure solid and ghosts the
// rest so it stays visible even when it sits behind or inside other geometry
// (the hepatic ducts inside the liver, the portal vein behind the bile duct).
export function emphasis(id: string, selected: string | null): Emphasis {
  if (!selected) return byId[id]?.context ? 'context' : 'normal'
  return id === selected ? 'selected' : 'ghosted'
}
