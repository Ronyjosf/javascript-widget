export class WidgetBuilder {
    constructor(recommendationsList) {
        this.recommendationsList = recommendationsList;
    }
    createImage() {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = this.recommendationsList[this.tileIndex].thumbnail[0].url;
        image.alt = this.recommendationsList[this.tileIndex].name;
        image.addEventListener("click", () => {
            console.log(this.recommendationsList[this.tileIndex].url);
            loadURL(image.src)
        });
        return image
    }

    createTitle() {
        const title = document.createElement("p");
        title.classList.add("title");
        title.innerText = this.recommendationsList[this.tileIndex].name;
        title.addEventListener('click', ()=>loadURL(this.image.src))
        return title;
    }

    createOrigin() {
        let origin = document.createElement("p");
        origin.classList.add("origin");
        origin.innerText = this.recommendationsList[this.tileIndex].origin;
        return origin;
    }

    createBrand() {
        let brand = document.createElement("div");
        brand.classList.add("brand");
        brand.innerText = this.recommendationsList[this.tileIndex].branding;
        brand.addEventListener('click', ()=>loadURL(this.image.src))
        return brand;
    }

    createCategory() {
        const category = document.createElement("div");
        if (this.recommendationsList[this.tileIndex].categories.length > 0) {

            category.classList.add("category");
            category.innerText = this.recommendationsList[this.tileIndex].categories[0];
        }
        return category;
    }

    tileBuilder() {
        let recommendationsContainer = document.querySelector('.widget');

        const numRows = 2;
        const numCols = 3;

        for (let i = 0; i < numRows; i++) {
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");

            for (let j= 0; j < numCols; j++) {
                this.tileIndex = i * numCols + j;

                const colElement = document.createElement("div")
                colElement.classList.add("col");

                // create image
                this.image = this.createImage();

                // create paragraph for title
                let title = this.createTitle();

                // create paragraph for origin
                let origin = this.createOrigin();

                // create container for brand_category_container to show them side by side
                const brand_category_container = document.createElement("div");
                brand_category_container.classList.add("brand_category_container");

                // create paragraph for brand
                let brand = this.createBrand();

                // create paragraph for category
                let category = this.createCategory();

                brand_category_container.append(brand, category)
                colElement.append(origin, this.image, title, brand_category_container);

                rowElement.appendChild(colElement);

            }
            recommendationsContainer.appendChild(rowElement);
        }
    }

}
