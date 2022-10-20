export const SVG = ({
  Url,
  className,
  fill = '#000000',
  stroke,
  strokeWidth
}) => {
  return (
    <Url className={className} fill={fill}/>
  )
}