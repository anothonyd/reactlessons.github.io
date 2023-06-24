import Counter from './Counter'
import ConvertCurrency from './CurrencyConvertor'

const Eight = () => {
    return (
        <div className='handson_eight shadow' style={{marginTop:"8rem"}}>
            <div>
                <Counter />
                <ConvertCurrency />
            </div>
        </div>
    )
}

export default Eight;