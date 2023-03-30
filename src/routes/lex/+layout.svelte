<script>
    import Svelvet from "svelvet";

    const initialNodes = [
      {
        id: 0,
        position: { x: 50, y: 50 },
        data: { label: "Säännökset" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 1,
        position: { x: 250, y: 50 },
        data: { label: "Säännös 1" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 2,
        position: { x: 250, y: 150 },
        data: { label: "Säännös 2" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 11,
        position: { x: 450, y: 50 },
        data: { label: "Säännös 1.1" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 21,
        position: { x: 450, y: 150 },
        data: { label: "Säännös 2.1" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 22,
        position: { x: 450, y: 200 },
        data: { label: "Säännös 2.2" },
        width: 150,
        height: 40,
        bgColor: "white"
      },
      {
        id: 23,
        position: { x: 450, y: 250 },
        data: { label: "Säännös 2.3" },
        width: 150,
        height: 40,
        bgColor: "white",
        
      },
      {
        id: 221,
        position: { x: 650, y: 200 },
        data: { label: "Säännös 2.2.1" },
        width: 150,
        height: 40,
        bgColor: "white",
      },
      {
        id: 211,
        position: { x: 650, y: 150 },
        data: { label: "Säännös 2.1.1" },
        width: 150,
        height: 40,
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
    width={1000} 
    height={800} 
    background={false}
    bgColor={'white'}
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