import React from 'react';
import './CustomizeList.css';
import Feature from '../Feature/Feature.js';
import Option from '../Option/Option.js';
import slugify from 'slugify';


function CustomizeList(props) {
  const features = Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <Option feature={feature} itemHash={itemHash} item={item} name={props.selected[feature].name} updateFeature={props.updateFeature} uscurrencyformat={props.uscurrencyformat} />
        );
      });
      return (
        <Feature featureHash={featureHash} key={featureHash} feature={feature} options={options}/>
      );
  });
  return (
    <form className="main__form">
    <h2>Customize your laptop</h2>
          {features}
      </form>
  );
}


export default CustomizeList;