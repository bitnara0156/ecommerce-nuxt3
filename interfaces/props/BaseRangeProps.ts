export default interface BaseRangeProps {
    minValue?: number,
    maxValue?: number,
    minimalRange?: number,
    maxRange?: number,
    textInput?: boolean | 'min' | 'max',
    limit?: number,
    minimum?: number,
    step?: number
};