// initialize algoliasearch
const searchClient = algoliasearch("LG58UB0A5R","b51486811f3c3c0abbc28ba6e4352dde");

// initialize instancesearch with index name in account
const search = instantsearch({
    indexName: 'items',
    searchClient,
});

// widgets showcase on search instance
search.addWidgets([
    instantsearch.widgets.searchBox({
        container: "#searchbox"
    }),

    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            item: `
                <article>
                <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
                <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
                </article>
                `
            }
    }),

    instantsearch.widgets.currentRefinements({
        container: "#current-refinements"
    }),

    instantsearch.widgets.refinementList({
        container: "#brand-list",
        attribute: "brand"
    }),

    instantsearch.widgets.hierarchicalMenu({
        container: "#hierarchical-menu",
        attributes: [
            "hierarchicalCategories.lvl0",
            "hierarchicalCategories.lvl1",
            "hierarchicalCategories.lvl2",
            "hierarchicalCategories.lvl3"
        ],
    }),

    instantsearch.widgets.rangeSlider({
        container: "#range-slider",
        attribute: "price"
    }),
    
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
]);

// trigger search
search.start();

