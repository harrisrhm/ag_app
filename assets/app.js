
const searchClient = algoliasearch("LG58UB0A5R","b51486811f3c3c0abbc28ba6e4352dde");

const search = instantsearch({
    indexName: 'items',
    searchClient,
});

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
        attributes: ["hierarchicalCategories"]
    }),
    instantsearch.widgets.rangeSlider({
        container: "#range-slider",
        attribute: "price"
    }),
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
]);

search.start();

