# Competicao de Drones

## Cenario
Uma empresa irá realizar uma competição de drones. Para isso são selecionados alguns drones com maior autonomia.

Fornecendo uma listagem de drones existentes, a quantidade de drones necessária e os IDs dos drones que se encontram em manutenção. Retornar os IDs dos drones selecionados, ordenados conforme a autonomia, do maior para o menor.



### Input


A tabela a seguir descreve os drones existentes para a seleção



| id | flightRange |

| 1 |         20          |

| 2 |         15          |

| 3 |         40         |

| 4 |          11         |

| 5 |          16         |

| 6 |         22         |

| 9 |        60         |





* Drones necessários: 3

* Drones em manutenção: [2, 5, 6]



### Output
Os drones selecionados devem ser os que possuem maior autonomia, ordenados do que possui maior autonomia para o que possui menor autonomia.



Saída: [9, 3, 1]

