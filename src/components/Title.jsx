const Title = ({title}) => (

<div style={{display:'grid', alignItems:'center', justifyItems:'center'}}>
    <h3 style={{width: '100%', textAlign: 'center', marginTop: '5rem'}}>
        { title }
    </h3>
    <div style={{backgroundColor: "var(--color-text)", height: "0.25rem", width: "7rem",  marginBottom: '4rem'}}></div>
</div>
);

export default Title;
