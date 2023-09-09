input.onButtonPressed(Button.A, function () {
    serial.writeValue("最大値", custom.calculateMax(配列))
    serial.writeValue("最小値", custom.calculateMin(配列))
    serial.writeValue("平均値", custom.calculateMean(配列))
    serial.writeValue("標準偏差", custom.calculateStandardDeviation(配列))
})
let 配列: number[] = []
serial.writeLine("program start")
配列 = [
1,
2,
3,
4,
5
]
serial.writeLine("=========計算結果====================")
