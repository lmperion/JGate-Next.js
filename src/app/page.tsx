import Card from '@/components/card/Card';
import classes from '../styles/page.module.scss'


interface Product {
  price: string;
  name: string;
  description: string;
  id: number;
}

const products = [{
  price: "$100",
  name: "Zebronics head phone",
  description: "A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.",
  id: 1,
}]

export default function Home() {
  return (
    <ul className={classes.products}>
      {products.map((product: Product) => {
        return(
          <Card product={product}/>
        )
      })}
    </ul>
  )
}
