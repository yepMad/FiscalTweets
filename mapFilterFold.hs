import Data.Char

tam :: String -> Integer
tam s = sum (map (\x -> 1) s)

uppers:: String -> String
uppers s = map (toUpper) s

dupli :: Int -> Int
dupli x = 2 * x

doubles :: [Int] -> [Int]
doubles n = map (dupli) n

real :: Int -> Float
real x = n / 100
    where n = fromIntegral x

centavosReais :: [Int] -> [Float]
centavosReais n = map (real) n

letras :: String -> String
letras c = filter (`elem` ['A' .. 'z']) c

rmChar :: Char -> String -> String
rmChar c s = filter (/= c) s

acima :: Int -> [Int] -> [Int]
acima n a = filter (> n) a

desiguais :: [(Int, Int)] -> [(Int, Int)]
desiguais n = filter (\x -> fst x /= snd x) n

upper :: String -> String
upper c = map toUpper (filter isAlpha c)

duplicar :: [Int] -> [Int]
duplicar c = map dupli (filter (> 3) c)

reverter :: [String] -> [String]
reverter s = map reverse (filter (\x -> even (length x) ) s)

productRec :: [Int] -> Int
productRec [x] = x
productRec (x:xs) = (*) x (productRec xs)

productFold :: [Int] -> Int
productFold a = foldr (*) 1 a

andRec :: [Bool] -> Bool
andRec [x] = x
andRec (x:xs) = (&&) True (andRec xs)

andFold :: [Bool] -> Bool
andFold a = foldr (&&) True a

concatRec :: [String] -> String
concatRec [x] = x
concatRec (x:xs) = (++) "" (concatRec xs)

concatFold :: [String] -> String
concatFold a = foldr (++) "" a

