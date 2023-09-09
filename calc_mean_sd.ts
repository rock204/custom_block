// カスタムブロック: 平均値、標準偏差、最大値、最小値を計算する
// リストを入力として受け取り、平均値、標準偏差、最大値、最小値を計算します。

namespace custom {
    /**
     * リストの平均値を計算します。
     * @param numbers 数値のリスト
     * @returns 平均値
     */
    //% block="リストの平均値を計算する %numbers=variables_get(myList)"
    export function calculateMean(numbers: number[]): number {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }

    /**
     * リストの標準偏差を計算します。
     * @param numbers 数値のリスト
     * @returns 標準偏差
     */
    //% block="リストの標準偏差を計算する %numbers=variables_get(myList)"
    export function calculateStandardDeviation(numbers: number[]): number {
        let mean = calculateMean(numbers);
        let sumOfSquares = 0;
        for (let i = 0; i < numbers.length; i++) {
            sumOfSquares += (numbers[i] - mean) * (numbers[i] - mean);
        }
        let variance = sumOfSquares / numbers.length;
        return Math.sqrt(variance);
    }

    /**
     * リストの最大値を計算します。
     * @param numbers 数値のリスト
     * @returns 最大値
     */
    //% block="リストの最大値を計算する %numbers=variables_get(myList)"
    export function calculateMax(numbers: number[]): number {
        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }

    /**
     * リストの最小値を計算します。
     * @param numbers 数値のリスト
     * @returns 最小値
     */
    //% block="リストの最小値を計算する %numbers=variables_get(myList)"
    export function calculateMin(numbers: number[]): number {
        let min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        return min;
    }
}
