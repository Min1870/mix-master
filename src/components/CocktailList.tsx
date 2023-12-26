
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

type CocktailType = {
  drinks: any;
};

const CocktailList = ({ drinks }: CocktailType) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No Matching Cocktail Found...</h4>
    );
  }

  const formattedDrinks = drinks.map((item: any) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return <Wrapper>
    {formattedDrinks.map((item: any) => {
        return <CocktailCard key={item.id} {...item}/>
    })}
  </Wrapper>;
};

export default CocktailList;
