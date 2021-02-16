let appData = {
  el: '#app',
  data: {
    items: items,

    filterAttributes: [],
    filterCostSort: null,

    filteredItems: items,
  },
  computed: {
    attributes: function () {
      let attributes = [];

      this.items.forEach(
        function (item) {
          if (!item.attributesArray) {
            return
          }
          attributes = attributes.concat(item.attributesArray);
        }
      )

      let uniqueAttributes = new Set(attributes);
      let uniqueAttributeArray = Array.from(uniqueAttributes);

      uniqueAttributeArray.sort();

      return uniqueAttributeArray;
    }
  },
  methods: {
    filterItemsByAttribute: function (selectedAttributes) {
      this.filteredItems = this.sortItems(this.items);

      this.filteredItems = this.filteredItems.filter(

        function (item) {
          if (!selectedAttributes) {
            return item
          }

          if (!item.attributesArray) {
            return
          }

          let filterIsSubset = selectedAttributes.every(val => item.attributesArray.includes(val));
          if (filterIsSubset) {
            return item
          }
        }

      );

    },
    sortItemsByCost: function (costSort) {
      this.filteredItems = this.sortItems(this.filteredItems);
    },
    sortItems: function (items) {
      if (this.filterCostSort === "false") {
        return items.sort(
          function (a, b) {
            return a.cost - b.cost
          }
        )
      } else {
        return items.sort(
          function (a, b) {
            return b.cost - a.cost
          }
        )
      }
    }
  }
};

let app = new Vue(appData)

app.$watch('filterAttributes', app.filterItemsByAttribute)

app.$watch('filterCostSort', app.sortItemsByCost)
