<script>
	import TreeView from './TreeView.svelte'

	const tree = {
		label: "Verolait",children: [
			{label: "Laki elinkeinotulon verottamisesta (1968/360)", children: [
				{label: "I osa", children: [
                    {label: "Joku"},
                ]},
                {label: "II osa", children: [
                    {label: "Joku"},
                ]},
                {label: "III osa", children: [
                    {label: "Joku"},
                ]},
                {label: "IV osa" , children: [
                    {label: "50-51 g §", children: [
                        {label: " §"},
                    ]},
                    {label: "52-52 i § (yritysjärjestelysäännökset)", children: [
                        {label: "52 §"},
                        {label: "52 a §"},
                        {label: "52 b §"},
                        {label: "52 c §"},
                        {label: "52 d §"},
                        {label: "52 e §"},
                        {label: "52 f §"},
                        {label: "52 g §"},
                        {label: "52 h §", children: [
                            {label: "sisällöntuottaja", children: [
                                {label: "Touko", id:'52hTouko'}, 
                                {label: "Jape", id:'52hJape'}, 
                                {label: "Tero", id:'52hTero'},
                                {label: "Aapo", id:'52hAapo' },
                            ]}
                        ]},
                        {label: "52 i §"}
                    ]},
                ]},
                {label: "V osa", children: [
                    {label: "Joku"},
                ]},
				{label: "Tänne voi laittaa jotain?"},
			]},
			{label: "Tuloverolaki (1992/1535)", children: [
				{label: "San Francisco"},
				{label: "Los Angeles"},
				{label: "Sacramento"},
			]},
		]
	}
</script>

<div class="layout">
    <aside>
        <TreeView {tree} />
    </aside>
    <main>
        <h2>Säännöksien merkityssisällöt</h2>
    </main>
</div>


<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns:22em 1fr;
		}
	}
</style>