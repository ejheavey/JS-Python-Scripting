import json

fixtures_file = open("lightfixtures.txt", "r")
fixtures_lines = fixtures_file.read()
fixtures_lines = fixtures_lines.split("\n")
fixtures_lines = [fixture_line.rstrip().lstrip().split(" ") for fixture_line in fixtures_lines]


def is_num(string):
    try:
        float(string)
        return True
    except ValueError:
        return False

def valid_fixture_line(line):
    try:
        last_is_nums = is_num(line[-1].replace(",",""))
        last_is_nums &= is_num(line[-2].replace(",",""))
        last_is_nums &= is_num(line[-3].replace(",",""))
        if not last_is_nums:
            return False
        floor = line[0]
        if line[0] in ["Cellar", "Penthouse", "All"]:
            return True
        if is_num(floor[0]) and floor[1:3].lower() in ["th", "rd", 'nd', "st"]:
            return True
        return False
    except IndexError:
        return False

def clean_light_fixtures(light_fixtures):
    clean = [lf for lf in light_fixtures if valid_fixture_line(lf)]
    return clean


def make_fixture_dics(clean_light_fixtures):
    dics = []
    for clean_line in clean_light_fixtures:
        dic = {}
        dic["floor"] = clean_line[0]
        dic["Total Wattage"] = clean_line[-1]
        dic["Watts per Fixture"] = clean_line[-2]
        dic["Number of Fixtures"] = clean_line[-3]
        dic["Lamp Type"] = clean_line[-5]
        dic["Fixture Type"] = clean_line[-6]
        dic["Location"] = " ".join(clean_line[1:-6])
        dics.append(dic)
    return dics

#for line in clean_light_fixtures(fixtures_lines):
#   print line

fixture_dics = make_fixture_dics(
                                   clean_light_fixtures(fixtures_lines)
                                )
for dic in fixture_dics:
    print dic

print json.dumps(fixture_dics)
