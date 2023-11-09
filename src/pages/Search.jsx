import {ArrowUp2, SearchNormal1} from 'iconsax-react';
import { useState } from 'react';
import ItemCard from '../components/ItemCard';
import allItems from '../components/data'


function Search() {

    const[searchItems, setSearchItems] = useState(null)

    function searchString (e) {
        // for (var j=0; j<strArray.length; j++) {
        //     if (strArray[j].match(str)) return j;
        // }
        // return -1;
let text = e.target.value
setSearchItems(allItems.filter(el=> el.name.toLowerCase().match(text.toLowerCase())))
    }

    return (
   <section className='container mx-auto search px-3 md:px-0  py-4'>
    <div className='flex justify-center'>
        <input type='text' placeholder='Enter a keyword' className='text-black' onChange={(e)=>searchString(e)}></input>
    </div>


<article className='flex gap-4 flex-wrap justify-center py-5'>
    {
    searchItems &&  searchItems.length > 0 ? searchItems.map(item=>{
            return <ItemCard item={item} />
        }) : <p> <SearchNormal1 size="32"/></p>
    }

</article>
   </section>
    )
  }
  
  export default Search
  