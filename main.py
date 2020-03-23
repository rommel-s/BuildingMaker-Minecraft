from time import sleep

init_pos = {}

init_area2D = {}
end_area2D = {}

while True:
    print('''
        Predefinições iniciais da construção:

        Aqui precisamos ter alguma ideia do formato da construção.
        Se estiver construindo um campo ou um plano, escolha a opção 2D
        Se estiver consturindo um prédio ou algo do tipo, escolha a opção 3D

        [ 1 ] 2D
        [ 2 ] 3D

    ''')

    mod = int(input(': '))

    if mod == 1:
        print('Insira o início da cadeia de blocos: ')

        init_area2D['x'] = int(input('Posição x: '))
        init_area2D['y'] = int(input('Posição y: '))
        init_area2D['z'] = int(input('Posição z: '))

        print(' ')
        print('Insira o fim da cadeia de blocos: ')

        end_area2D['x'] = int(input('Posição x: '))
        end_area2D['y'] = int(input('Posição y: '))
        end_area2D['z'] = int(input('Posição z: '))

        if end_area2D['y'] != init_area2D['y']:
            print('''===== AVISO =====
            Os valores de altura são diferentes, então
            a construção será 3D.
            ''')

        bloco = str(input("Qual tipo de bloco?\n: "))

        print(f'/fill {init_area2D["x"]} {init_area2D["y"]} {init_area2D["z"]} {end_area2D["x"]} {end_area2D["y"]} {end_area2D["z"]} {bloco}')

        pergunta = str(input('Continua?: ')).upper()
        if pergunta == 'N':
            break