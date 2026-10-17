# Model provenance and preparation

## Source and license

The runtime model uses **BodyParts3D / Anatomography 4.3** (object set 4.3, ontology tree FMA3.0), retrieved **2026-10-16**. All selected OBJ headers report compatibility version 4.3.

The original service explicitly permits modification and redistribution of contour data and rendered images under **[CC BY-SA 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)** ([legal text](https://creativecommons.org/licenses/by-sa/2.1/jp/legalcode)). An inert [snapshot of that notice](model-source/original-license.html.txt), copied from the lungs explorer's provenance record, is included. This license governs `public/models/gallbladder.glb`, the manifest's model data and the model screenshots, separately from the MIT application code. This follows the same choice as [lungs-3d](https://github.com/organui/lungs-3d), which also uses 4.3 data: the LSDB archive's CC BY 4.0 grant covers its 4.0 release and is not extended to these 4.3 meshes.

Credit: **BodyParts3D / Anatomography, © The Database Center for Life Science (DBCLS).** Adapted by OrganUI. No endorsement is implied.

## Retrieval and pinning

The network policy of the sandbox this was built in blocked both `dbarchive.biosciencedbc.jp` and `lifesciencedb.jp`, so the official archives could not be downloaded. Geometry comes from the public [olivercase/body_parts_3d_api](https://github.com/olivercase/body_parts_3d_api) mirror, pinned at commit `fd527e6f4daf732fd814314d9257df5877b844bc` (the same commit the lungs and pancreas explorers pin).

Each OBJ is checked three ways:

1. Its SHA-256 matches the oid in its pinned Git LFS pointer (recorded per file in [model-inputs.json](../scripts/model-inputs.json)).
2. Its embedded `File ID` and `Concept ID` headers match.
3. That concept maps to that FJ element in the official 4.3 IS-A table, [`FMA2Obj-4.3.tsv`](model-source/FMA2Obj-4.3.tsv) (SHA-256 `c3d16c89…935d4f`). The table is the unchanged official download preserved by lungs-3d; `prepare-model.ts` refuses to run if its hash changes.

The official per-element metadata table (original model filenames) could not be fetched, so unlike lungs-3d it is not preserved here.

## Selected structures

| Structure | Source concept(s) | Elements |
| --- | --- | --- |
| Gallbladder | FMA7202 | FJ2817 |
| Cystic duct | FMA14539 | FJ3080 |
| Common hepatic duct | FMA14668 | FJ3079 |
| Right hepatic duct | FMA14669 | FJ3123 |
| Left hepatic duct | FMA14670 | FJ3096 |
| Intrahepatic bile ducts | FMA71867, FMA71868 (right anterior superior and inferior), FMA71869, FMA71870 (right posterior superior and inferior), FMA71885, FMA71886 (left medial superior and inferior), FMA71887, FMA71888 (left lateral superior and inferior), FMA71889 (caudate) | FJ3071, FJ3072, FJ3109, FJ3110, FJ3108, FJ3104, FJ3105, FJ3103, FJ3088, FJ3090, FJ3089, FJ1883 |
| Pancreatic duct | FMA63103 pancreatic duct tree | FJ1896 |
| Liver | FMA13365 caudate lobe, FMA15739, FMA15741–FMA15744, FMA15746 hepatovenous segments | FJ2816, FJ2818–FJ2824 |
| Duodenum | FMA7206 | FJ2573 |
| Pancreas | FMA63120 parenchyma of pancreas | FJ1895 |
| Portal vein | FMA71904 pre-hepatic portal vein | FJ3082 |
| Common hepatic artery | FMA76536 trunk | FJ3078 |
| Hepatic artery proper | FMA76548 trunk | FJ3081 |
| Right hepatic artery | FMA70456 trunk | FJ3117 |
| Left hepatic artery | FMA70457 trunk | FJ3095 |

33 elements, 149,900 triangles, 3.8 MB GLB. The liver accounts for about 80% of the triangles. Each element belongs to exactly one structure; the script refuses duplicates and unused inputs. Per-element hashes, sizes and counts are in the [manifest](../public/models/manifest.json) and [selected-mappings.tsv](model-source/selected-mappings.tsv).

Decisions:

- **No common bile duct mesh.** The 4.3 table has no element for the common bile duct, and the mirror has none. The common hepatic duct mesh (FJ3079) runs from the hepatic duct junction about 84 mm down to the level of the pancreatic head, so it also follows the course the common bile duct takes below the cystic duct junction. The app says so in that structure's note rather than relabelling it.
- **No cystic artery.** The source has no mesh for it. The right hepatic artery note says so.
- **One version per surface.** Several concepts map to two elements whose bounds agree within about 1 mm: they are alternative versions of the same surface, and rendering both would z-fight. One of each pair is used: cystic duct FJ3080 (not FJ4526), caudate biliary tributary FJ1883 (not FJ5812, nor FJ3094, the identically bounded "left duct of caudate lobe"), left medial inferior tributary FJ3103 (not FJ5819) and liver segment VI FJ2822 (19,450 triangles, not FJ2409 with 8,534). The kept elements match the liver explorer's choices where it has them.
- **Liver surface.** The liver is the caudate lobe and the hepatovenous segment meshes, the same elements as the liver explorer's surface apart from FJ2409. In the 4.3 table FJ2823 is listed under both segment VII (FMA15745) and VIII (FMA15746) and its header says VIII, so it is taken under FMA15746. The segments are combined into one selectable surface; their seams are visible through the translucent surface. The liver and pancreas render at 30% opacity until selected, so the ducts and the gallbladder inside or behind them stay visible.
- **Pancreatic duct** is included because it usually joins the bile duct at the hepatopancreatic ampulla. The ampulla and sphincter are not modelled.
- Omitted: hepatic veins, intrahepatic portal and arterial branches (shown in the liver explorer), stomach, inferior vena cava, gastroduodenal artery, ligaments, lymph nodes and body context.

## Transformation and orientation

Vertices are recentred on the selection's source bounding box and uniformly scaled by `0.016`; axes change from source `[x, y, z]` to display `[x, z, -y]` (source +x patient left, −y anterior, +z superior). Anterior view looks along display −Z, posterior along +Z, and the inferior view looks up from below and slightly in front. In the anterior view the gallbladder and the right lobe of the liver are on the viewer's left and the tail of the pancreas on the right, as expected; from below the gallbladder fundus sits at the liver's lower edge. No anatomical reshaping or decimation is performed.

## Reproduce

```sh
bun run prepare:model   # downloads missing OBJs into .asset-cache/objs, verifies, writes the GLB and manifest
bun run verify:model    # checks the GLB hash, structure IDs, element lists and geometry
```
