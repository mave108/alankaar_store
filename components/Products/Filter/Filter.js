import React from 'react';
import './style.scss';
import SingleSelected from './SingleSelected';
import MultipleSelected from './MultipleSelected';

const Filter = () => {
    return (
        <aside>
            <div className="filter-wrapper">
                <SingleSelected heading="sort by" items={[
                    { name: "category", label: "What’s New" },
                    { name: "category", label: "Price: Low to High" },
                    { name: "category", label: "Price: Low to High" }
                ]} />
                <MultipleSelected heading="Categories" items={[
                    { name: "category", label: "Kurtas" },
                    { name: "category", label: "Kurta Sets" },
                    { name: "category", label: "Nehru Jackets" },
                    { name: "category", label: "Pyjamas" },
                    { name: "category", label: "Sherwani" },
                    { name: "category", label: "Dhotis" }
                ]} />
                <MultipleSelected heading="price" items={[
                    { name: "category", label: "Rs 400 to Rs 1000" },
                    { name: "category", label: "Rs 1000 to Rs 2000" },
                    { name: "category", label: "Rs 5000 to Rs 10000" },
                    { name: "category", label: "Rs 10000 to Rs 20000" },
                    { name: "category", label: "Rs 20000 to Rs 50000" },
                ]} />
            </div>
        </aside>

    );
}

export default Filter;