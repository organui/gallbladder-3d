# OrganUI Gallbladder

A minimal, standalone, open-source explorer for the gallbladder and bile ducts, built with React, TypeScript, Three.js, React Three Fiber, Vite, and Bun. It shares its interaction design and code with [OrganUI Heart](https://github.com/organui/heart-3d).

**Status:** working local demo. Fifteen selectable structures from a real, openly licensed model, responsive layouts, and checked desktop/mobile interactions. Public deployment and clinical anatomy review have not been completed.

![OrganUI Gallbladder desktop explorer](docs/screenshots/desktop.png)

## Run locally

Install [Bun](https://bun.sh/) **1.4.2 or newer**, then:

```sh
git clone https://github.com/organui/gallbladder-3d.git
cd gallbladder-3d
bun install --frozen-lockfile
bun run dev
```

Open **http://127.0.0.1:5173**. No environment variables, accounts, API keys, sibling repositories, model downloads, or external font services are needed after dependency installation. The ready-to-use 3.8 MB GLB is in `public/models/`.

```sh
bun run typecheck       # TypeScript checks, including conversion scripts
bun run test            # Unit tests for selection emphasis, picking, ownership, and the anatomy-tree adapter
bun run verify:model    # Check the GLB hash, source IDs, element lists, and valid geometry
bun run build           # Typecheck and create dist/
bun run preview         # Serve the production build at http://127.0.0.1:4173
bun run format:check    # Check formatting
```

The app is static and uses relative build paths. No deployment has been performed.

## Explore

- The gallbladder opens in the anterior view with the bile ducts, a translucent liver and pancreas, the duodenum, the portal vein and the hepatic arteries. Open **Anatomy** in the header to browse structures.
- Drag to rotate; scroll or pinch to zoom. The view menu has anterior, posterior and inferior presets; the inferior view shows the gallbladder on the underside of the liver. Manual rotation changes its label to **Custom view**; zooming and selecting keep the view name.
- Select a mesh or use the anatomy tree (the OrganUI registry `anatomy-tree` component, see [registry integration](docs/REGISTRY_INTEGRATION.md)). The selected structure glows in its own colour and everything else is ghosted, so the ducts stay visible inside the liver.
- Isolate a structure, hide it, or restore all. **Reset explorer** restores the anterior camera, visibility, selection, tree state and tour.
- Follow six guided stops, from the gallbladder under the liver to the cystic duct, the ducts inside the liver, the duct down to the duodenum, the shared exit with the pancreatic duct, and the portal vein behind.
- Keyboard: Tab/Enter for controls, arrow keys to rotate the focused model, `+`/`-` to zoom, Escape closes the panel and returns focus to its toggle.

<details>
<summary>Selection, inferior and posterior views and mobile screenshots</summary>

![Cystic duct selected with the rest ghosted](docs/screenshots/anatomy.png)

![Inferior view showing the gallbladder under the liver](docs/screenshots/inferior.png)

![Posterior view showing the bile duct and portal vein](docs/screenshots/posterior.png)

<img src="docs/screenshots/mobile.png" alt="Mobile gallbladder explorer" width="300" />

</details>

## Model, credits, and license

> BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS), licensed under Creative Commons Attribution-Share Alike 2.1 Japan. Adapted by OrganUI.

The model is a curated subset of **BodyParts3D / Anatomography 4.3**: 33 source meshes grouped into 15 structures. The model data and screenshots of it are under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)**, separately from this repository's **MIT code license**. Meshes come from a checksum-pinned public mirror and are cross-checked against the official 4.3 concept table. Read [model provenance](docs/MODEL_PROVENANCE.md), [asset attribution](public/models/ATTRIBUTION.md) and the [manifest](public/models/manifest.json).

Descriptions summarise the [NCI SEER Training biliary anatomy page](https://www.training.seer.cancer.gov/biliary/anatomy) and general anatomy. **Expert anatomical review is pending.** This is an educational interface demonstration, not a diagnostic or clinical tool.

Known limitations:

- The source has no common bile duct or cystic artery. The common hepatic duct mesh continues down toward the duodenum along the common bile duct's course and is labelled as the source names it.
- The gallbladder is one mesh, so fundus, body and neck cannot be selected separately. The hepatopancreatic ampulla and its sphincter are not modelled.
- The liver is one translucent surface made of segment meshes, and its seams show through. Intrahepatic ducts are grouped into one selectable set; hepatic veins and intrahepatic portal and arterial branches are omitted.
- Colours are illustrative.
- Browser checks used headless Chromium with software WebGL at desktop and phone viewport sizes, not physical devices or a screen-reader audit.

## License

Original application code: [MIT](LICENSE). Anatomy model, derived model images, fonts, and icons retain their separately documented licenses.

Part of [OrganUI](https://github.com/organui).
