from django.shortcuts import render
from django.http import HttpResponse

import psutil
import os
import json
import getpass 
from pathlib import Path
def index(request):
    return render(request,'index.html')

def main():
    usrname = getpass.getuser()
    DST = f'D:\\CSE_CSF\\Major\\Major1\\Extentation\\ex\\frontend\\src\\sample.json'
    for p in psutil.process_iter():
        with p.oneshot():
            if p.name()=="PYScript.exe":
                thisdict={"Process_Name":p.name(),"Process_ID" :p.pid,"CPU_Utilization" : psutil.cpu_percent(),"File_Location":p.exe()}
                y= json.dumps(thisdict) 
                print(y)
                with open(DST, "w") as outfile:
                    outfile.write("[" +y+"]")
                    outfile.close()
                break

def simple_function(request):
    
    main()
    return HttpResponse("<html><script>window.location.replace('/')</script></html>")