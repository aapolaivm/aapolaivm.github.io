<script>
    import Svelvet from "svelvet";

    //Korvaavia GoJS?

    const initialNodes = [
      {
        id: 0,
        position: { x: 25, y: 50 },
        data: { label: "Elinkeino- verolaki" },
        width: 100,
        height: 60,
        bgColor: "white"
      },
      {
        id: 1,
        position: { x: 175, y: 50 },
        data: { label: "Säännös 1" },
        width: 100,
        height: 40,
        bgColor: "white"
      },
      {
        id: 2,
        position: { x: 175, y: 150 },
        data: { label: "Säännös 2" },
        width: 100,
        height: 40,
        bgColor: "white"
      },
      {
        id: 11,
        position: { x: 325, y: 50 },
        data: { label: "Säännös 1.1" },
        width: 100,
        height: 40,
        bgColor: "white"
      },
      {
        id: 21,
        position: { x: 325, y: 150 },
        data: { label: "Säännös 2.1" },
        width: 100,
        height: 40,
        bgColor: "white"
      },
      {
        id: 22,
        position: { x: 325, y: 200 },
        data: { label: "Säännös 2.2" },
        width: 100,
        height: 40,
        bgColor: "white"
      },
      {
        id: 23,
        position: { x: 325, y: 250 },
        data: { label: "Säännös 2.3" },
        width: 100,
        height: 40,
        bgColor: "white",
        
      },
      {
        id: 221,
        position: { x: 475, y: 215 },
        data: { label: "Säännös 2.2.1: Säännös kertoo seuraavaa..." },
        width: 150,
        height: 50,
        bgColor: "white",
      },
      {
        id: 211,
        position: { x: 475, y: 150 },
        data: { label: "Säännös 2.1.1: Säännös kertoo seuraavaa..." },
        width: 150,
        height: 50,
        bgColor: "white",
      }
    ];

    const initialEdges = [
      { id: "e1-2", source: 0, target: 1 },
      { id: "e1-3", source: 0, target: 2 },
      { id: "e2-3", source: 1, target: 11 },
      { id: "e3-4", source: 2, target: 21 },
      { id: "e4-5", source: 2, target: 22 },
      { id: "e4-6", source: 2, target: 23 },
      { id: "e6-7", source: 22, target: 221 },
      { id: "e6-8", source: 21, target: 211 }
    ];
</script>

<Svelvet 
    nodes={initialNodes} 
    edges={initialEdges} 
    width={800} 
    height={800} 
    background={false}
    bgColor={'#EAE7DC'}
    locked={true}
    collapsible={true}
    movement={false}
/>

<style>
    :global(.customClassNode) {
        width: 150px !important;
        height: 40px !important;
        background-color: 'white' !important;
    }
</style>

<slot />